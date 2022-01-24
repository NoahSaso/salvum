import cn from "classnames"
import { ComponentType, FC, HTMLAttributes } from "react"
import { IoOpenOutline } from "react-icons/io5"

import styles from "./external_link_button.module.scss"

interface Props {
  title: string
  url: string
  containerStyle?: HTMLAttributes<HTMLAnchorElement>["style"]
  LeftIconComponent?: ComponentType<{ size?: number }>
}

const ExternalLinkButton: FC<Props> = ({
  title,
  url,
  containerStyle,
  LeftIconComponent,
}) => (
  <a
    className={styles.container}
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    style={containerStyle}
  >
    {!!LeftIconComponent && (
      <div className={cn(styles.card, styles.iconContainer)}>
        <LeftIconComponent size={24} />
      </div>
    )}

    <div className={cn("horizontal", styles.card)}>
      <p>{title}</p>
      <IoOpenOutline size={20} />
    </div>
  </a>
)

export default ExternalLinkButton
