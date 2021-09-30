import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IoGitNetworkOutline,IoInformationCircle,IoInformationCircleOutline } from 'react-icons/io5'

import styles from './footer.module.scss'

const tabs = [
  {
    label: 'Substances',
    icon: {
      inactive: IoInformationCircleOutline,
      active: IoInformationCircle
    },
    href: '/',
  },
  {
    label: 'Interactions',
    icon: {
      inactive: IoGitNetworkOutline,
      active: IoGitNetworkOutline
    },
    href: '/interactions',
  },
]

const Footer: FC = () => {
  const { pathname } = useRouter()

  return (
    <div className={cn('centered', styles.container)}>
      {tabs.map(({ label, icon: { inactive, active }, href }) => {
        const isActive = pathname === href
        const Icon = isActive ? active : inactive
        return (
          <div key={href}>
            <Link href={href}>
              <a className={cn({ [styles.active]: isActive })}>
                <Icon size={24} />
                <p>{label}</p>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
