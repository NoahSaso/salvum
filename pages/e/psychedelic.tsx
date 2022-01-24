import Head from "next/head"
import Link from "next/link"
import { FC } from "react"
import { IoCallOutline, IoChatbubblesOutline } from "react-icons/io5"

import Breathe from "../../components/breathe"
import { Container, RowLink, Section } from "../../components/emergency"
import Header from "../../components/header"
import styles from "./psychedelic.module.scss"

const Psychedelic: FC = () => (
  <>
    <Head>
      <title>Salvum | Psychedelic</title>
      <meta
        name="description"
        content="Guide to dealing with a psychedelic emergency."
      />
    </Head>

    <Header title="Psychedelic" backHref="/emergency" centered />

    <Container>
      <Section>
        <h1>breathe, relax, let go</h1>
      </Section>

      <Section>
        <h2>Keep in mind...</h2>
        <ul>
          <li>your body is safe</li>
          <li>
            you are experiencing a substance-induced state of mind, which will
            end
          </li>
          <li>this is normal</li>
        </ul>
      </Section>

      <Section>
        <h2>Are you...</h2>
        <ul>
          <li>hungry?</li>
          <li>thirsty?</li>
          <li>too warm or too cold?</li>
          <li>overwhelmed by noise?</li>
          <li>in an uncomfortable social situation?</li>
        </ul>
      </Section>

      <Section>
        <h2>Try...</h2>
        <ul>
          <li>
            moving around in your environment; even standing on the other side
            of the room can help
          </li>
          <li>changing the music to something light or upbeat</li>
          <li>thinking of someone you love</li>
          <li>wrapping yourself in a blanket</li>
        </ul>
      </Section>

      <Section className={styles.breatheSection}>
        <h2>Breathing exercise</h2>
        <Breathe smaller />
      </Section>

      <Section>
        <h2>Peer Support Resources</h2>
        <RowLink
          label="Fireside Project's Calling Line"
          href="tel:+16234737433"
          icon={IoCallOutline}
        />
        <RowLink
          label="Fireside Project's Texting Line"
          href="sms:+16234737433"
          icon={IoChatbubblesOutline}
        />
        <RowLink
          label="TripSit's Internet Chat"
          href="https://chat.tripsit.me"
        />
      </Section>

      <Link href="/">
        <a>
          <Section>
            <h2>Toxicity</h2>
            <p>
              Classical psychedelics—such as LSD, psilocybin mushrooms,
              mescaline-containing cacti, and DMT—are safe. If you are unsure
              about the toxicity of your substance, click here to search for it
              and then scroll down to find toxicity.
            </p>
          </Section>
        </a>
      </Link>

      <Section>
        <h2>Physical Harm</h2>
        <p>
          If you feel someone is in immediate danger of physical harm, including
          yourself, remain calm and contact emergency medical services.
        </p>
      </Section>
    </Container>
  </>
)

export default Psychedelic
