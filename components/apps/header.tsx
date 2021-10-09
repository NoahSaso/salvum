import Link from 'next/link'
import { FC } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

import styles from './header.module.scss'

interface Props {
  title: string
}

const Header: FC<Props> = ({ title }) => (
  <Link href="/apps">
    <a className={styles.container}>
      <FiChevronLeft size={30} />
      <h1>{title}</h1>
    </a>
  </Link>
)

export default Header
