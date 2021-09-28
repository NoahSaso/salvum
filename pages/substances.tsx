import cn from 'classnames'
import Head from 'next/head'
import { FC, useState } from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import { SWRConfig } from 'swr'

import ExternalLinkButton from '../components/external_link_button'
import ROA from '../components/roa'
import { useSubstances } from '../helpers/swr'
import { getSubstances } from '../services/data'
import styles from '../styles/substances.module.scss'
import { NextPageWithFallback } from '../types'

const Substances: FC = () => {
  const { substances, isLoading } = useSubstances()
  const [selected, setSelected] = useState(-1)

  const substance = selected > -1 ? substances[selected] : null

  return (
    <>
      <Head>
        <title>Salvum &gt; Substances</title>
      </Head>
      <div className={styles.container}>
        <div className={cn(styles.list, { hidden: !!substance })}>
          {substances.map((substance, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
            >
              <p>{substance.name}</p>
            </div>
          ))}
        </div>
        {!!substance && (
          <div className={styles.substanceContainer}>
            <a
              className="horizontal"
              target="_blank"
              rel="noopener noreferrer"
              href={substance.url}
            >
              <h1>{substance.name}</h1>
              <IoOpenOutline size={28} />
            </a>

            {!!substance.classes?.chemical && Array.isArray(substance.classes.chemical) && (
              <p className={styles.classes}>{substance.classes.chemical.join(' • ')}</p>
            )}

            {!!substance.summary && (
              <p className={styles.summary}>{substance.summary}</p>
            )}

            {!!substance.experiencesUrl && (
              <ExternalLinkButton
                title="Experience reports on Erowid"
                url={substance.experiencesUrl}
                containerStyle={{ marginTop: 10 }}
              />
            )}

            {!!substance.roas?.length && (
              <>
                <h3>Routes of Administration</h3>
                <div className={styles.roaContainer}>
                  {substance.roas.map((roa, idx) => (
                    <ROA
                      key={idx}
                      roa={roa}
                    />
                  ))}
                </div>
              </>
            )}

            {!!substance.toxicity?.length && (
              <>
                <h3>Toxicity</h3>
                <div className={styles.group}>
                  {substance.toxicity.map((toxicity, idx) => (
                    <p key={idx}>{toxicity}</p>
                  ))}
                </div>
              </>
            )}

            {!!substance.addictionPotential && (
              <>
                <h3>Addiction Potential</h3>
                <p>{substance.addictionPotential}</p>
              </>
            )}

            {!!substance.tolerance && (!!substance.tolerance.full || !!substance.tolerance.half || !!substance.tolerance.zero) && (
              <>
                <h3>Tolerance</h3>
                <div className={styles.group}>
                  {!!substance.tolerance.full && (
                    <div className="horizontal rowGroup">
                      <p>100%</p>
                      <p>{substance.tolerance.full}</p>
                    </div>
                  )}
                  {!!substance.tolerance.half && (
                    <div className="horizontal rowGroup">
                      <p>50%</p>
                      <p>{substance.tolerance.half}</p>
                    </div>
                  )}
                  {!!substance.tolerance.zero && (
                    <div className="horizontal rowGroup">
                      <p>0%</p>
                      <p>{substance.tolerance.zero}</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {!!substance.crossTolerances?.length && (
              <>
                <h3>Cross Tolerances</h3>
                <div className={styles.group}>
                  {substance.crossTolerances.map((crossTolerance, idx) => (
                    <p key={idx}>{crossTolerance}</p>
                  ))}
                </div>
              </>
            )}

            {!!substance.reagents && (
              <>
                <h3>Reagent Test Kit Reactions</h3>
                <p>{substance.reagents}</p>
              </>
            )}

            {!!substance.interactions?.length && (
              <>
                <h3>Interactions</h3>
                <div className={styles.interactions}>
                  {substance.interactions.map((interaction, idx) => (
                    <a
                      key={idx}
                    >
                      {interaction.name}
                    </a>
                  ))}
                </div>
              </>
            )}

            <h3>Sources</h3>
            <div className={styles.group}>
              <ExternalLinkButton
                title="PsychonautWiki (License: CC BY-SA 4.0)"
                url="https://psychonautwiki.org/wiki/PsychonautWiki"
              />
              <ExternalLinkButton
                title="TripSit"
                url="https://drugs.tripsit.me"
              />
              <p className={styles.disclaimer}>
                Disclaimer: This information is NOT medical advice. Substances consumed outside of a medical setting may be
                impure or affect you in unexpected ways based on your unique physiology. Please do your own research before
                ingesting anything and be safe &lt;3.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const SubstancesPage: NextPageWithFallback = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Substances />
  </SWRConfig>
)

export default SubstancesPage

export const getStaticProps = async () => ({
  props: {
    fallback: {
      '/api/substances': getSubstances()
    }
  }
})
