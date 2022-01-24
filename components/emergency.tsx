import cn from "classnames"
import { FC, ReactNode, ReactNodeArray } from "react"
import { IconType } from "react-icons"
import { IoOpenOutline } from "react-icons/io5"

import styles from "./emergency.module.scss"

interface Props {
  children: ReactNode | ReactNodeArray
  className?: string
}

export const Container: FC<Props> = ({ children, className }) => (
  <div className={cn(styles.container, className)}>{children}</div>
)

export const Section: FC<Props> = ({ children, className }) => (
  <div className={cn("card", styles.section, className)}>{children}</div>
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
