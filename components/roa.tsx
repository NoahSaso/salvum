import clsx from "clsx"
import { FC } from "react"

import { ROA } from "../types"
import styles from "./roa.module.scss"

interface Props {
  roa: ROA
}

const ROAComponent: FC<Props> = ({
  roa: { bioavailability, dosage, duration },
}) => (
  <div className={styles.container}>
    {!!bioavailability && (
      <div className="horizontal">
        <p>Bioavailability</p>
        <p>{bioavailability}</p>
      </div>
    )}

    {!!dosage?.length && (
      <>
        <h3>Dosage</h3>
        {dosage.map(({ name: level, value, note }, idx) => (
          <div
            key={idx}
            className={clsx("horizontal", "rowGroup", styles.group)}
          >
            <p>{level}</p>
            <div>
              {!!value && <p>{value}</p>}
              {!!note && <p className={styles.tertiary}>{note}</p>}
            </div>
          </div>
        ))}
      </>
    )}

    {!!duration?.length && (
      <>
        <h3>Duration</h3>
        {duration.map(({ name: level, value, note }, idx) => (
          <div
            key={idx}
            className={clsx("horizontal", "rowGroup", styles.group)}
          >
            <p>{level}</p>
            <div>
              {!!value && <p>{value}</p>}
              {!!note && <p className={styles.tertiary}>{note}</p>}
            </div>
          </div>
        ))}
      </>
    )}
  </div>
)

export default ROAComponent
