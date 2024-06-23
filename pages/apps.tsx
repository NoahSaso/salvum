import clsx from "clsx"
import Head from "next/head"
import Link from "next/link"
import { FC } from "react"
import { FiChevronRight } from "react-icons/fi"
import { IoOpenOutline } from "react-icons/io5"

import Header from "../components/header"
import styles from "./apps.module.scss"

interface AppProps {
  title: string
  subtitle?: string
  url: string
}
const App: FC<AppProps> = ({ title, subtitle, url }) => {
  const isExternal = !url.startsWith("/")

  const Icon = isExternal ? (
    <IoOpenOutline size={28} />
  ) : (
    <FiChevronRight size={32} />
  )

  const aProps = {
    href: url,
    className: clsx("card", styles.appCard),
    ...(isExternal && {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  }

  const content = (
    <>
      <div>
        <h2>{title}</h2>
        {!!subtitle && <p>{subtitle}</p>}
      </div>
      {Icon}
    </>
  )

  return isExternal ? (
    <a {...aProps}>{content}</a>
  ) : (
    <Link {...aProps}>{content}</Link>
  )
}

const Apps: FC = () => {
  return (
    <>
      <Head>
        <title>Salvum | Apps</title>
        <meta
          name="description"
          content="Interactive modules that serve various purposes, such as a simple guided breathing exercise to calm you down."
        />
      </Head>

      <Header title="Apps" centered />

      <div className={styles.container}>
        <App
          title="Breathe"
          subtitle="a guided square breath to ground yourself"
          url="/a/breathe"
        />

        <App
          title="Colorful Fluid Simulator"
          subtitle="beautiful visuals &amp; interactive"
          url="https://paveldogreat.github.io/WebGL-Fluid-Simulation"
        />

        <App
          title="Geometric Tunnel Visualizer"
          subtitle="with calm music"
          url="https://erppy.co"
        />

        <App
          title="Colorful Particle Simulator"
          subtitle="interactive only on computer"
          url="http://www.iamnop.com/particles"
        />

        <App
          title="Iridescent Puddle"
          subtitle="pretty chaotic, works better on computer"
          url="http://iridescentpuddle.com"
        />
      </div>
    </>
  )
}

export default Apps
