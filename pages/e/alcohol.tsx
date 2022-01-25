import Head from "next/head"
import { FC } from "react"
import { BsFillPatchQuestionFill } from "react-icons/bs"
import { FaDizzy, FaRegSnowflake } from "react-icons/fa"
import { FiWind } from "react-icons/fi"
import { RiZzzFill } from "react-icons/ri"

import {
  Container,
  RecoveryPositionSection,
  Section,
  Signs,
} from "../../components/emergency"
import Header from "../../components/header"

const AlcoholPoisoning: FC = () => (
  <>
    <Head>
      <title>Salvum | Alcohol Poisoning</title>
      <meta
        name="description"
        content="Guide to dealing with alcohol poisoning."
      />
    </Head>

    <Header title="Alcohol Poisoning" backHref="/emergency" centered />

    <Container>
      <Section transparent>
        <h1>Signs of Poisoning</h1>
      </Section>

      <Section>
        <Signs
          signs={[
            {
              icon: BsFillPatchQuestionFill,
              label: "Confusion, loss of coordination",
            },
            {
              icon: RiZzzFill,
              label: "Loss of consciousness and/or unresponsiveness",
            },
            {
              icon: FiWind,
              label: "Irregular or very slow breathing",
            },
            {
              icon: FaRegSnowflake,
              label: "Pale, blue, gray, and/or cold skin",
            },
            {
              icon: FaDizzy,
              label: "Vomiting, seizures",
            },
          ]}
        />
      </Section>

      <Section transparent>
        <h1>How to Respond</h1>
      </Section>

      <Section>
        <p>
          Contact emergency medical services or instruct someone else to do so.
        </p>
      </Section>

      <Section>
        <h2>Things to keep in mind...</h2>
        <ul>
          <li>Try to keep them awake and sitting up.</li>
          <li>
            If they are passed out or cannot sit upright, place them in the
            recovery position.
          </li>
          <li>If they can drink water, give them some to sip on slowly.</li>
          <li>Alcohol lowers blood temperature, so make sure they are warm.</li>
          <li>
            Alcohol levels can increase for up to an hour after their last
            drink, so if possible, do not leave them alone until medical
            services arrive or their condition has stably improved to a
            non-dangerous level (at least 2-3 hours).
          </li>
          <li>
            Attempts to sober them up, such as a shower or stimulants (including
            caffeine), will not help and are likely dangerous.
          </li>
        </ul>
      </Section>

      <RecoveryPositionSection />
    </Container>
  </>
)

export default AlcoholPoisoning
