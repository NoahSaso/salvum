import cn from 'classnames'
import { ComponentType, FC, HTMLAttributes, useRef, useState } from 'react'
import { IoCheckmark, IoCopyOutline } from 'react-icons/io5'

import styles from './clipboard_button.module.scss'

interface Props {
  title?: string
  IconComponent?: ComponentType<{ size?: number }>
  data: string
  containerStyle?: HTMLAttributes<HTMLDivElement>['style']
}

const ClipboardButton: FC<Props> = ({
  title,
  IconComponent,
  data,
  containerStyle
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = () => {
    inputRef.current?.select()
    document.execCommand('copy')
    inputRef.current?.blur()

    setCopied(true)
  }

  const ActionIcon = copied ? IoCheckmark : IoCopyOutline

  return (
    <div className={cn(styles.container, containerStyle)}>
      {!!title && <p>{title}</p>}

      <div className={styles.row}>
        <div className={styles.iconContainer}>
          {!!IconComponent && <IconComponent size={24} />}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={data}
          onFocus={({ target }) => target.select()}
          readOnly
        />

        <button onClick={copy}>
          <ActionIcon size={20} />
        </button>
      </div>
    </div>
  )
}

export default ClipboardButton
