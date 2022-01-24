import Head from 'next/head'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { IoOpenOutline } from 'react-icons/io5'

import Header from '../../components/header'
import styles from './index.module.scss'

interface AppProps {
  title: string
  subtitle?: string
  url: string
}
const App: FC<AppProps> = ({ title, subtitle, url }) => {
  const isExternal = !url.startsWith('/apps')

  const Icon = isExternal
    ? <IoOpenOutline size={28} />
    : <FiChevronRight size={32} />
  const aProps = isExternal
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  const content = (
    <a className={styles.card} {...aProps}>
      <div>
        <h2>{title}</h2>
        {!!subtitle && <p>{subtitle}</p>}
      </div>
      {Icon}
    </a>
  )

  return isExternal
    ? content
    : (
      <Link href={url}>
        {content}
      </Link>
    )
}

const Apps: FC = () => {
  return (
    <>
      <Head>
        <title>Salvum | Apps</title>
        <meta name="description" content="Interactive modules that serve various purposes, such as a simple guided breathing exercise to calm you down." />
      </Head>
      <div className={styles.container}>
        <Header title="Apps" />

        <App
          title="Breathe"
          subtitle="a guided square breath to ground yourself"
          url="/apps/breathe"
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
          title="Colorful Particle Simulator 1"
          subtitle="interactive only on computer"
          url="http://www.iamnop.com/particles"
        />

        <App
          title="Colorful Particle Simulator 2"
          subtitle="interactive only on computer"
          url="https://testdrive-archive.azurewebsites.net/Graphics/TouchEffects/Default.html"
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
