import cn from "classnames"
import Head from "next/head"
import { usePlausible } from "next-plausible"
import { FC, useEffect, useMemo, useRef, useState } from "react"
import { SWRConfig } from "swr"

import Interaction, { InteractionDisclaimer } from "../components/interaction"
import { useInteractions } from "../helpers/swr"
import { getInteractions } from "../services/data"
import {
  InteractionSubstance,
  NextPageWithFallback,
  PlausibleEvents,
} from "../types"
import styles from "./interactions.module.scss"

const Interactions: FC = () => {
  const { interactions } = useInteractions()
  const plausible = usePlausible<PlausibleEvents>()

  const [substance1, setSubstance1] = useState(
    null as InteractionSubstance | null
  )
  const [substance2, setSubstance2] = useState(
    null as InteractionSubstance | null
  )

  // scroll to top of interaction if selected
  const interactionHeader = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    interactionHeader.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    })
  }, [substance1, substance2])

  const tappedSubstance = (substance: InteractionSubstance) => {
    let newSubstance1 = substance1
    let newSubstance2 = substance2

    // deselect substance
    if (substance === substance1) {
      // if deselecting substance 1, move substance 2 to 1 and clear 2
      newSubstance1 = substance2
      newSubstance2 = null
    } else if (substance === substance2) {
      // if deselecting substance 2, just do it
      newSubstance2 = null
    }
    // select substance
    else if (substance1) {
      // if substance 1 is already set, set substance 2
      newSubstance2 = substance
    } else {
      // if substance 1 not set, set it
      newSubstance1 = substance
    }

    setSubstance1(newSubstance1)
    setSubstance2(newSubstance2)

    // plausible event if viewing new interaction
    if (newSubstance1 && newSubstance2)
      plausible("interaction", {
        props: {
          substance: newSubstance1,
          otherSubstance: newSubstance2,
          combined: `${newSubstance1} + ${newSubstance2}`,
        },
      })
  }

  const substanceLabels = useMemo(
    () => Object.keys(interactions).sort() as unknown as InteractionSubstance[],
    [interactions]
  )
  const interaction = useMemo(
    () => substance1 && substance2 && interactions[substance1][substance2],
    [substance1, substance2, interactions]
  )

  return (
    <div className={styles.container}>
      <div className={styles.interactions}>
        {substanceLabels.map((substance) => (
          <button
            key={substance}
            onClick={() => tappedSubstance(substance)}
            className={cn({
              [styles.selected]:
                substance === substance1 || substance === substance2,
            })}
          >
            {substance}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {interaction ? (
          <div ref={interactionHeader} className={styles.interaction}>
            <Interaction interaction={interaction} />
          </div>
        ) : (
          <p className={styles.instruction}>
            Choose two substances above to view their interaction profile.
          </p>
        )}

        <InteractionDisclaimer />
      </div>
    </div>
  )
}

const InteractionsPage: NextPageWithFallback = ({ fallback }) => (
  <>
    <Head>
      <title>Salvum | Interactions</title>
      <meta
        name="description"
        content="Quick substance interaction/combination lookup for some commonly used drugs and drug classes."
      />
    </Head>
    <SWRConfig value={{ fallback }}>
      <Interactions />
    </SWRConfig>
  </>
)

export default InteractionsPage

export const getStaticProps = async () => ({
  props: {
    fallback: {
      "/api/interactions": getInteractions(),
    },
  },
})
