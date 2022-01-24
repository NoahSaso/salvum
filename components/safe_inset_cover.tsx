import cn from 'classnames'
import { FC } from 'react'

import styles from './safe_inset_cover.module.scss'

const SafeInsetCover: FC = () => (
  <div className={cn('centered', styles.container)}>
  </div>
)

export default SafeInsetCover
