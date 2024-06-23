import clsx from "clsx"
import { FC } from "react"

import styles from "./safe_inset_cover.module.scss"

const SafeInsetCover: FC = () => (
  <div className={clsx("centered", styles.container)}></div>
)

export default SafeInsetCover
