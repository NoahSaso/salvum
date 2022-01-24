import Head from "next/head"
import { FC } from "react"

import BreatheComponent from "../../components/breathe"
import Header from "../../components/header"
import styles from "./breathe.module.scss"

const Breathe: FC = () => (
  <>
    <Head>
      <title>Salvum | Breathe</title>
      <meta
        name="description"
        content="Guided breathing exercise to help ground yourself."
      />
    </Head>

    <div className={styles.container}>
      <Header title="Breathe" backHref="/apps" centered />

      <BreatheComponent />
    </div>
  </>
)

export default Breathe
