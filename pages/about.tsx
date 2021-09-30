import { usePlausible } from 'next-plausible'
import { FC } from 'react'
import { IoLogoPaypal, IoLogoVenmo } from 'react-icons/io5'
import { SiBitcoin, SiEthereum, SiLitecoin, SiMonero } from 'react-icons/si'

import ClipboardButton from '../components/clipboard_button'
import ExternalLinkButton from '../components/external_link_button'
import { PlausibleEvents } from '../types'
import styles from './about.module.scss'

const About: FC = () => {
  const plausible = usePlausible<PlausibleEvents>()

  return (
    <div className={styles.container}>
      <h1>About</h1>

      <div className={styles.card}>
        <p>
          My name is Noah, and I believe open access to information is one of the best tools we have to support people
          in dangerous situations and fight stigma and prejudice caused by the War on Drugs. Salvum consolidates harm
          reduction resources in one place in an effort to make safety in altered states of consciousness as
          easy as possible.
        </p>
      </div>

      <div className={styles.card}>
        <p>
          All substance information is sourced from PsychonautWiki and TripSit, two organizations with open databases
          of information on many substances.
        </p>
      </div>

      <h2>Support</h2>

      <div className={styles.card}>
        <p>
          This information will always be free. If you would like to help keep this website running, feel free
          to donate using one of the methods below. Please do not feel obligated to do so; I&lsquo;d rather you share this
          with people who could use it than give me anything.
        </p>
      </div>

      <div className={styles.support}>
        <ExternalLinkButton
          LeftIconComponent={IoLogoPaypal}
          title="paypal.me/nsaso"
          url="https://paypal.me/nsaso"
        />
        <ClipboardButton
          IconComponent={IoLogoVenmo}
          data="NoahSaso"
          callback={() => plausible('venmo')}
        />
        <ClipboardButton
          IconComponent={SiMonero}
          data="88MbTyekREM45CZRLq8R3KNqCQssTZH9T1du3iiQKxYqjLd3ZR9afgT1Wt5nWA1vYXRP8bANGcm9TA96zdQ6c1NS82owQWX"
          callback={() => plausible('xmr')}
        />
        <ClipboardButton
          IconComponent={SiEthereum}
          data="0x94A47454cFA7409B5a54862538C4320A675F4b29"
          callback={() => plausible('eth')}
        />
        <ClipboardButton
          IconComponent={SiLitecoin}
          data="LezM1it7yw482eLsmZPKk7tJapo7GHq2uA"
          callback={() => plausible('ltc')}
        />
        <ClipboardButton
          IconComponent={SiBitcoin}
          data="1DXpZnZMSaShaQNTcgwdQBLkd97VeBWxqd"
          callback={() => plausible('btc')}
        />
      </div>
    </div>
  )
}

export default About
