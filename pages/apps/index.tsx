import Link from 'next/link'
import { usePlausible } from 'next-plausible'
import { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { PlausibleEvents } from '../../types'
import styles from './index.module.scss'

const Apps: FC = () => {
  const plausible = usePlausible<PlausibleEvents>()

  return (
    <div className={styles.container}>
      <h1>Apps</h1>

      <Link href="/apps/breathe">
        <a className={styles.card}>
          <div>
            <h2>Breathe</h2>
            <p>A guided square breath to ground yourself</p>
          </div>
          <FiChevronRight size={32} />
        </a>
      </Link>
    </div>
  )
}

export default Apps
