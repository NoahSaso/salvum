import cn from 'classnames'
import Head from 'next/head'
import { FC, useState } from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import { SWRConfig } from 'swr'

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
            <div key={idx} onClick={() => setSelected(idx)}>
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
