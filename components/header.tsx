import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"
import { FiChevronLeft } from "react-icons/fi"

import styles from "./header.module.scss"

interface Props {
  title: string
  backHref?: string
  centered?: boolean
}

const Header: FC<Props> = ({ title, backHref, centered }) => {
  const content = (
    <h1
      className={clsx({
        [styles.centered]: centered,
        [styles.hasBack]: !!backHref,
      })}
    >
      {title}
    </h1>
  )

  return backHref ? (
    <Link href={backHref} className={styles.container}>
      <FiChevronLeft size={30} />
      {content}
    </Link>
  ) : (
    <div className={styles.container}>{content}</div>
  )
}

export default Header
