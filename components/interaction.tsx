import clsx from "clsx"
import { FC } from "react"

import { INTERACTION_CATEGORIES } from "../data/interactions"
import { Interaction } from "../types"
import styles from "./interaction.module.scss"

interface Props {
  interaction: Interaction
}

type InteractionStatus = keyof typeof INTERACTION_CATEGORIES
const InteractionComponent: FC<Props> = ({ interaction: { status, note } }) => {
  const {
    color,
    icon: Icon,
    description,
  } = INTERACTION_CATEGORIES[status as InteractionStatus]
  return (
    <>
      <div className={styles.category} style={{ backgroundColor: color }}>
        <Icon size={30} />
        <h2>{status}</h2>
      </div>

      <p className={styles.description}>{description}</p>
      {!!note && <p className={styles.note}>{note}</p>}
    </>
  )
}

export default InteractionComponent

export const InteractionDisclaimer: FC = () => (
  <a
    className="disclaimer"
    target="_blank"
    rel="noopener noreferrer"
    href="https://wiki.tripsit.me/wiki/Drug_combinations"
  >
    Source: TripSit
    <br />
    This information is only intended as a quick reference and is NOT medical
    advice. Substances consumed outside of a medical setting may be impure or
    affect you in unexpected ways based on your unique physiology. Please do
    your own research before ingesting anything and be safe &lt;3. Tap to view
    the source on tripsit.me.
  </a>
)
