import cn from "classnames"
import { FC, ReactNode, ReactNodeArray } from "react"

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
