import cn from 'classnames'
import { FC, HTMLAttributes, useRef, useState } from 'react'
import { IoCheckmark, IoCopyOutline } from 'react-icons/io5'

import styles from './clipboard_button.module.scss'

interface Props {
  title?: string
  Icon?: JSX.Element
  data: string
  containerStyle?: HTMLAttributes<HTMLDivElement>['style'],
  callback?: () => void
}

const ClipboardButton: FC<Props> = ({
  title,
  Icon,
  data,
  containerStyle,
  callback
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = () => {
    inputRef.current?.select()
    document.execCommand('copy')

    setCopied(true)
    callback?.()
  }

  const ActionIcon = copied ? IoCheckmark : IoCopyOutline

  return (
    <div className={cn(styles.container, containerStyle)}>
      {!!title && <p>{title}</p>}

      <div className={cn('clickable', styles.row)} onClick={copy}>
        {!!Icon && (
          <div className={styles.iconContainer}>
            {Icon}
          </div>
        )}

        <div className={styles.actionContainer}>
          <input
            ref={inputRef}
            type="text"
            value={data}
            onFocus={({ target }) => target.select()}
            readOnly
          />

          <ActionIcon size={20} />
        </div>
      </div>
    </div>
  )
}

export default ClipboardButton
