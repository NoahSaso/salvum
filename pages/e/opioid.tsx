import Head from "next/head"
import { FC } from "react"
import { FaRegSnowflake } from "react-icons/fa"
import { FiWind } from "react-icons/fi"
import { GoEye } from "react-icons/go"
import { IoBody, IoVolumeHigh } from "react-icons/io5"
import { RiZzzFill } from "react-icons/ri"

import {
  Container,
  RecoveryPositionSection,
  Section,
  Signs,
} from "../../components/emergency"
import Header from "../../components/header"

const OpioidPoisoning: FC = () => (
  <>
    <Head>
      <title>Salvum | Opioid Overdose</title>
      <meta
        name="description"
        content="Guide to dealing with an opioid overdose."
      />
    </Head>

    <Header title="Opioid Overdose" backHref="/emergency" centered />

    <Container>
      <Section transparent>
        <h1>Signs of Overdose</h1>
      </Section>

      <Section>
        <Signs
          signs={[
            {
              icon: GoEye,
              label: "Small, constricted pupils",
            },
            {
              icon: RiZzzFill,
              label: "Loss of consciousness and/or unresponsiveness",
            },
            {
              icon: FiWind,
              label: "Soft and shallow, erratic, or stopped breathing",
            },
            {
              icon: IoVolumeHigh,
              label: "Choking or gurgling sounds",
            },
            {
              icon: IoBody,
              label: "Limp body, droopy muscles",
            },
            {
              icon: FaRegSnowflake,
              label: "Pale, blue, gray, and/or cold skin",
            },
          ]}
        />
      </Section>

      <Section transparent>
        <h1>Test for Overdose</h1>
      </Section>

      <Section>
        <h2>Stimulation</h2>
        <p>
          If you&apos;re not sure whether they are overdosing, check if they
          respond to stimulus. Do not use too much force.
        </p>

        <h3>Verbal</h3>
        <ul>
          <li>Call their name.</li>
          <li>
            Say something they may not like to hear to grab their attention
            (such as &quot;I&apos;m going to call the police&quot;).
          </li>
        </ul>

        <h3>Physical</h3>
        <ul>
          <li>
            Rub your knuckles on the middle of their chest where the ribs meet
            (on the sternum).
          </li>
          <li>Rub your knuckles on their upper lip.</li>
          <li>Pinch the back of their arm.</li>
        </ul>

        <p>
          If they don&apos;t respond and show signs listed above, assume they
          are overdosing.
        </p>
      </Section>

      <Section transparent>
        <h1>How to Respond</h1>
      </Section>

      <Section>
        <h2>Administer naloxone if available.</h2>
        <ul>
          <li>
            <b>Nasal Spray:</b> Pick one nostril, stick the device all the way
            up, and activate the plunger.
          </li>
          <li>
            <b>Injectable:</b> Inject into thigh muscle.
          </li>
        </ul>

        <p>Apply a second time if they do not respond in 3-5 minutes.</p>
      </Section>

      <Section>
        <h2>
          Contact emergency medical services or instruct someone else to do so.
        </h2>

        <h3>Tell the dispatcher:</h3>
        <ul>
          <li>Their breathing has slowed or stopped.</li>
          <li>They are unresponsive.</li>
          <li>Your exact location.</li>
        </ul>
        <p className="dim">
          The dispatcher only needs to know that someone&apos;s life is in
          immediate danger. Mentioning drugs could draw unwanted and unnecessary
          attention.
        </p>

        <h3>Tell the paramedics:</h3>
        <ul>
          <li>Whether or not you administered naloxone and if it helped.</li>
          <li>
            As much information about the ingested substances as possible.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Try to keep them awake, alert, and breathing.</h2>
        <p>
          Use the stimulation techniques described above if they are losing
          consciousness. If they are struggling to breathe or have chest
          tightness, contact emergency medical services immediately.
        </p>
      </Section>

      <Section>
        <h2>Rescue breathing</h2>

        <p>
          If they are unresponsive and not breathing much or have stopped
          breathing, you need to get oxygen into their body.
        </p>
        <ul>
          <li>Place them on their back.</li>
          <li>Tilt up their chin to open the airway.</li>
          <li>
            Ensure their airway is clear (remove anything from inside their
            mouth).
          </li>
          <li>
            Pinch the nose closed with one hand and give 2 breaths. If their
            chest does not rise, tilt their head back more and ensure their nose
            is completely plugged.
          </li>
          <li>Repeat: give one breath every 5 seconds.</li>
        </ul>
      </Section>

      <RecoveryPositionSection />
    </Container>
  </>
)

export default OpioidPoisoning
