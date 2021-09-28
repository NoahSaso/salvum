import cn from 'classnames'
import { FC } from 'react'

import styles from '../styles/roa.module.scss'
import { ROA } from '../types'

interface Props {
  roa: ROA;
}

const ROAComponent: FC<Props> = ({ roa: {
  name,
  bioavailability,
  dosage,
  duration
} }) => (
  <div className={styles.container}>
    <h2>{name}</h2>
    {!!bioavailability && (
      <div className={cn('horizontal', styles.bioavailability)}>
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
            className={cn('horizontal', 'rowGroup', styles.group)}
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
            className={cn('horizontal', 'rowGroup', styles.group)}
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
