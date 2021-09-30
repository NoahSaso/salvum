import { FC } from 'react'

import styles from './offline.module.scss'

const Offline: FC = () => (
  <div className={styles.container}>
    <h1>
      Sorry! Offline mode doesn&lsquo;t seem to be working :&#40;
      <br />
      <br />
      Reload me once you come back online, and offline mode should work again.
    </h1>
  </div>
)

export default Offline
