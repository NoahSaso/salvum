import Link from "next/link"
import React, { FC } from "react"

import styles from "./index.module.scss"

const pages = [
  {
    title: "Psychedelic",
    href: "/emergency/psychedelic",
  },
  {
    title: "Too Much\nWeed",
    href: "/emergency/weed",
  },
  {
    title: "Opioid\nOverdose",
    href: "/emergency/opioid",
  },
  {
    title: "Alcohol\nPoisoning",
    href: "/emergency/alcohol",
  },
]

const EmergencyPage: FC = () => (
  <div className={styles.container}>
    <h1>Select the type of emergency.</h1>

    <div className={styles.pages}>
      {pages.map(({ title, href }) => (
        <Link key={title} href={href}>
          <a>{title}</a>
        </Link>
      ))}
    </div>

    <p>
      Disclaimer:
      <br />
      The information contained within these pages is intended for educational
      purposes only. It is your responsibility to do your own research and
      ensure you know what steps to take in the event of a dangerous situation.
      It&lsquo;s better to be safe than sorry, so when in doubt, contact
      emergency health services if anyone is at risk of hurting themself or
      others.
    </p>
  </div>
)

export default EmergencyPage
