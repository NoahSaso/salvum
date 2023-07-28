import Head from "next/head"
import Image from "next/image"
import { usePlausible } from "next-plausible"
import { FC } from "react"
import { IoCodeSlash } from "react-icons/io5"

import ExternalLinkButton from "../components/external_link_button"
import { PlausibleEvents } from "../types"
import styles from "./about.module.scss"

const About: FC = () => {
  const plausible = usePlausible<PlausibleEvents>()

  return (
    <>
      <Head>
        <title>Salvum | About</title>
        <meta name="description" content="About Salvum" />
      </Head>
      <div className={styles.container}>
        <h1>About</h1>

        <div className={styles.card}>
          <p>
            All substance information is sourced from PsychonautWiki and
            TripSit, two organizations with open databases of information on
            many substances.
          </p>
        </div>

        <ExternalLinkButton
          LeftIconComponent={IoCodeSlash}
          title="View source code"
          url="https://github.com/noahsaso/salvum"
        />

        <a
          className={styles.license}
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="license noopener noreferrer"
        >
          <Image
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            alt="Creative Commons License"
            width={88}
            height={31}
          />
          <p>
            This work is licensed under a Creative Commons
            Attribution-NonCommercial-ShareAlike 4.0 International License.
          </p>
        </a>
      </div>
    </>
  )
}

export default About
