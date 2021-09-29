import cn from 'classnames'
import { FC, HTMLAttributes } from 'react'
import { IoOpenOutline } from 'react-icons/io5'

import styles from '../styles/external_link_button.module.scss'

interface Props {
  title: string
  url: string
  containerStyle?: HTMLAttributes<HTMLAnchorElement>['style']
}

const ExternalLinkButton: FC<Props> = ({ title, url, containerStyle }) => (
  <a
    className={cn('horizontal', styles.container)}
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    style={containerStyle}
  >
    <p>{title}</p>
    <IoOpenOutline size={20} />
  </a>
)

export default ExternalLinkButton
