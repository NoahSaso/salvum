import cn from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai"
import { GiAtom } from "react-icons/gi"
import {
  IoApps,
  IoGitNetworkOutline,
  IoWarning,
  IoWarningOutline,
} from "react-icons/io5"

import styles from "./footer.module.scss"

const tabs = [
  {
    label: "Substances",
    icon: {
      inactive: GiAtom,
      active: GiAtom,
    },
    href: "/",
  },
  {
    label: "Interactions",
    icon: {
      inactive: IoGitNetworkOutline,
      active: IoGitNetworkOutline,
    },
    href: "/interactions",
  },
  {
    label: "Apps",
    icon: {
      inactive: IoApps,
      active: IoApps,
    },
    href: "/apps",
  },
  {
    label: "Emergency",
    icon: {
      inactive: IoWarningOutline,
      active: IoWarning,
    },
    href: "/emergency",
  },
  {
    label: "About",
    icon: {
      inactive: AiOutlineInfoCircle,
      active: AiFillInfoCircle,
    },
    href: "/about",
  },
]

const Footer: FC = () => {
  const { pathname } = useRouter()
  const rootPath = "/" + pathname.split("/")[1]

  return (
    <div className={cn("centered", styles.container)}>
      {tabs.map(({ label, icon: { inactive, active }, href }) => {
        const isActive = rootPath === href
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
