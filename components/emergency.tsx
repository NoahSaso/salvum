import cn from "classnames"
import { FC, ReactNode, ReactNodeArray } from "react"
import { IconType } from "react-icons"
import { IoOpenOutline } from "react-icons/io5"

import styles from "./emergency.module.scss"

interface ChildrenProps {
  children: ReactNode | ReactNodeArray
}

export const Container: FC<ChildrenProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export const Section: FC<ChildrenProps> = ({ children }) => (
  <div className={cn("card", styles.section)}>{children}</div>
)

interface RowLinkProps {
  label: string
  href: string
  icon?: IconType
}
export const RowLink: FC<RowLinkProps> = ({ label, href, icon }) => {
  const Icon = icon ?? IoOpenOutline

  return (
    <a
      className={styles.rowLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>{label}</p>
      <Icon size={22} />
    </a>
  )
}
