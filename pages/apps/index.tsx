import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import styles from './index.module.scss'

const Apps: FC = () => {
  return (
    <>
      <Head>
        <title>Salvum | Apps</title>
        <meta name="description" content="Interactive modules that serve various purposes, such as a simple guided breathing exercise to calm you down." />
      </Head>
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
    </>
  )
}

export default Apps
