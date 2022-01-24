import cn from "classnames"
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
      className={cn({
        [styles.centered]: centered,
        [styles.hasBack]: !!backHref,
      })}
    >
      {title}
    </h1>
  )

  return backHref ? (
    <Link href={backHref}>
      <a className={styles.container}>
        <FiChevronLeft size={30} />
        {content}
      </a>
    </Link>
  ) : (
    <div className={styles.container}>{content}</div>
  )
}

export default Header
