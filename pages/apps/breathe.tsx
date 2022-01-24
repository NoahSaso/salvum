import cn from 'classnames'
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'

import Header from '../../components/header'
import styles from './breathe.module.scss'

enum BreatheState {
  NotStarted,
  Inhale,
  HoldIn,
  Exhale,
  HoldOut
}
const nextBreatheState: Record<BreatheState, BreatheState> = {
  [BreatheState.NotStarted]: BreatheState.Inhale,
  [BreatheState.Inhale]: BreatheState.HoldIn,
  [BreatheState.HoldIn]: BreatheState.Exhale,
  [BreatheState.Exhale]: BreatheState.HoldOut,
  [BreatheState.HoldOut]: BreatheState.Inhale
}
const breatheTextMap: Record<BreatheState, string> = {
  [BreatheState.NotStarted]: 'Get ready...',
  [BreatheState.Inhale]: 'Inhale through your nose',
  [BreatheState.HoldIn]: 'Hold',
  [BreatheState.Exhale]: 'Exhale through your mouth',
  [BreatheState.HoldOut]: 'Hold'
}
const breatheCountMap: Record<BreatheState, number> = {
  [BreatheState.NotStarted]: 3,
  [BreatheState.Inhale]: 4,
  [BreatheState.HoldIn]: 4,
  [BreatheState.Exhale]: 4,
  [BreatheState.HoldOut]: 4
}

const Breathe: FC = () => {
  const [breathingIn, setBreathingIn] = useState(false)
  const [breathingOut, setBreathingOut] = useState(false)
  const [count, setCount] = useState(breatheCountMap[BreatheState.NotStarted])
  const [instructions, setInstructions] = useState(breatheTextMap[BreatheState.NotStarted])

  useEffect(() => {
    let t = 0
    let state: BreatheState = BreatheState.NotStarted
    const tick = () => {
      t++

      const topCount = state === BreatheState.NotStarted ? 3 : 4
      if (t >= topCount) {
        t = 0
        state = nextBreatheState[state]
        setCount(breatheCountMap[state])
        setInstructions(breatheTextMap[state])
        // update animation if necessary
        switch (state) {
          case BreatheState.Inhale:
            setBreathingIn(true)
            setBreathingOut(false)
            break
          case BreatheState.Exhale:
            setBreathingOut(true)
            setBreathingIn(false)
            break
          default:
            break
        }
      }
      else setCount(topCount - t)
    }

    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [setBreathingIn, setBreathingOut, setCount])

  return (
    <>
      <Head>
        <title>Salvum | Breathe</title>
        <meta name="description" content="Guided breathing exercise to help ground yourself." />
      </Head>
      <div className={styles.container}>
        <Header title="Breathe" backHref="/apps" />

        <div className={styles.breatheContainer}>
          <div className={cn(styles.outer, { [styles.breatheIn]: breathingIn, [styles.breatheOut]: breathingOut })}>
            <div className={styles.middle}>
              <div className={styles.inner}>
                <p>{count}</p>
              </div>
            </div>
          </div>

          <p className={styles.instructions}>{instructions}</p>
        </div>
      </div>
    </>
  )
}

export default Breathe
