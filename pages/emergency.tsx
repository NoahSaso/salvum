import Head from "next/head"
import Link from "next/link"
import React, { FC, useState } from "react"
import PuffLoader from "react-spinners/PuffLoader"

import styles from "./emergency.module.scss"

const pages = [
  {
    title: "Psychedelic",
    href: "/e/psychedelic",
  },
  {
    title: "Too Much\nWeed",
    href: "/e/weed",
  },
  {
    title: "Opioid\nOverdose",
    href: "/e/opioid",
  },
  {
    title: "Alcohol\nPoisoning",
    href: "/e/alcohol",
  },
]

const EmergencyPage: FC = () => {
  const [loadingHref, setLoadingHref] = useState(null as string | null)

  return (
    <>
      <Head>
        <title>Salvum | Emergency</title>
        <meta
          name="description"
          content="Guides to help make it through a difficult experience."
        />
      </Head>

      <div className={styles.container}>
        <h1>Select the type of emergency.</h1>

        <div className={styles.pages}>
          {pages.map(({ title, href }) => (
            <Link key={title} href={href}>
              <a onClick={() => setLoadingHref(href)}>
                {loadingHref === href ? (
                  <PuffLoader size={60} color="#ffffff" />
                ) : (
                  title
                )}
              </a>
            </Link>
          ))}
        </div>

        <p className="center">
          Disclaimer:
          <br />
          The information contained within these pages is intended for
          educational purposes only. It is your responsibility to do your own
          research and ensure you know what steps to take in the event of a
          dangerous situation. It&apos;s better to be safe than sorry, so when
          in doubt, contact emergency health services if anyone is at risk of
          hurting themself or others.
        </p>
      </div>
    </>
  )
}

export default EmergencyPage
