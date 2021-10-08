import { FC } from 'react'

import Header from '../../components/apps/header'
import styles from './breathe.module.scss'

const Breathe: FC = () => (
  <div className={styles.container}>
    <Header title="Breathe" />

    <div className={styles.breatheContainer}>
      <div className={styles.outer}>
        <div className={styles.middle}>
          <div className={styles.inner}>
            <p>3</p>
          </div>
        </div>
      </div>

      <p className={styles.instructions}></p>
    </div>
  </div>
)

export default Breathe
