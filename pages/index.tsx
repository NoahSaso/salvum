import cn from 'classnames'
import fuzzysort from 'fuzzysort'
import Head from 'next/head'
import { FC, useEffect, useRef, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { IoOpenOutline } from 'react-icons/io5'
import { SWRConfig } from 'swr'

import ExternalLinkButton from '../components/external_link_button'
import Interaction, { InteractionDisclaimer } from '../components/interaction'
import ROA from '../components/roa'
import { useSubstances } from '../helpers/swr'
import { getSubstances } from '../services/data'
import styles from '../styles/substances.module.scss'
import { NextPageWithFallback, Substance } from '../types'

let currentSubstanceFilter = 0

const Substances: FC = () => {
  const { substances, isLoading } = useSubstances()

  const searchRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const [search, setSearch] = useState('')
  const [filteredSubstances, setFilteredSubstances] = useState(substances)
  const [substance, setSelectedSubstance] = useState(null as Substance | null)
  // show list when focused even if selected substance
  const [searchFocused, setSearchFocused] = useState(true)

  // show first ROA by default
  const [selectedROA, setSelectedROA] = useState(0)

  const [selectedInteraction, setSelectedInteraction] = useState(-1)
  const interactionsHeader = useRef<HTMLHeadingElement>(null )

  // scroll to top of interactions if selected or deselected
  useEffect(() => {
    interactionsHeader.current?.scrollIntoView({ behavior: 'smooth' })
  }, [selectedInteraction])

  const scrollToTop = () => listRef.current?.scroll({ top: 0, behavior: 'smooth' })

  // filter data for search
  useEffect(() => {
    let currentSearch = ++currentSubstanceFilter
    if (!search?.trim())
      setFilteredSubstances(substances)
    else
      fuzzysort
        .goAsync(search, substances, {
          keys: ['name', 'aliasesStr'],
          allowTypo: true,
        })
        .then(async result => {
          // if another filter is running, don't update
          if (currentSearch !== currentSubstanceFilter)
            return

          // calculate which aliases to display
          const augmentedResult = result.map(({ obj }) => ({
            ...obj,
            aliasesSubtitle:
              obj.aliases?.length
                ? fuzzysort
                  .go(search, obj.aliases, { allowTypo: true })
                  .map(r => r.target)
                  .join(', ')
                : undefined
          }))

          // check again bc why not
          if (currentSearch !== currentSubstanceFilter)
            return

          setFilteredSubstances(augmentedResult)
        })
  }, [search, setFilteredSubstances, substances])

  // scroll to top when substance filter is updated
  useEffect(() => {
    scrollToTop()
  }, [filteredSubstances])

  // blur input on selecting substance and clear selected data
  useEffect(() => {
    searchRef.current?.blur()

    setSelectedROA(0)
    setSelectedInteraction(-1)
  }, [substance])

  // focus search bar on render
  useEffect(() => {
    searchRef.current?.focus()
  }, [])

  const roa =
    selectedROA > -1 &&
    !!substance?.roas?.length &&
    selectedROA < substance!.roas!.length
      ? substance.roas[selectedROA]
      : substance?.roas[0]
  const interaction =
    selectedInteraction > -1 &&
    !!substance?.interactions?.length &&
    selectedInteraction < substance!.interactions!.length
      ? substance.interactions[selectedInteraction]
      : null

  const showingSubstance = !!substance && !searchFocused

  return (
    <>
      {/* <Head>
        <title>Salvum &gt; Substances</title>
      </Head> */}
      <div className={styles.container}>
        <input
          ref={searchRef}
          className={styles.search}
          type="text"
          placeholder="Search for a substance..."
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          // on enter, select first substance
          onKeyDown={({ key, keyCode }) => (key === 'Enter' || keyCode === 13) && setSelectedSubstance(filteredSubstances[0])}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />

        <div
          className={cn(styles.list, { hidden: showingSubstance })}
          ref={listRef}
        >
          {filteredSubstances.map(substance => (
            <div
              key={substance.name}
              // onMouseDown instead of onClick so it runs before the search bar's onBlur
              onMouseDown={() => setSelectedSubstance(substance)}
            >
              <p>{substance.name}</p>
              {!!substance.aliasesSubtitle && <p>{substance.aliasesSubtitle}</p>}
            </div>
          ))}
        </div>
        {showingSubstance && (
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
                <h3>Route{substance.roas.length > 1 ? 's' : ''} of Administration</h3>
                <div className={styles.roas}>
                  {substance.roas.map(({ name }, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedROA(idx)}
                      className={cn({
                        [styles.selected]: selectedROA === idx,
                        [styles.only]: substance.roas.length === 1,
                        [styles.small]: substance.roas.length >= 3,
                      })}
                    >
                      {name}
                    </button>
                  ))}
                </div>
                {!!roa && (
                  <ROA roa={roa} />
                )}
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
                <h3 ref={interactionsHeader}>Interactions</h3>
                {interaction
                  ? (
                    <div className={styles.interaction}>
                      <div
                        className="horizontal"
                        onClick={() => setSelectedInteraction(-1)}
                      >
                        <FiChevronLeft size={30} />
                        <h2>{interaction.name}</h2>
                      </div>

                      <Interaction interaction={interaction} />
                      <InteractionDisclaimer />
                    </div>
                  )
                  : (
                    <div className={styles.interactions}>
                      {substance.interactions.map((interaction, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedInteraction(idx)}
                        >
                          {interaction.name}
                        </button>
                      ))}
                    </div>
                  )
                }
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
