import Head from 'next/head'
import Image from 'next/image'
import { usePlausible } from 'next-plausible'
import { FC } from 'react'
import { IoCodeSlash, IoLogoPaypal, IoLogoVenmo, IoMail } from 'react-icons/io5'
import { SiBitcoin, SiEthereum, SiMonero } from 'react-icons/si'

import ClipboardButton from '../components/clipboard_button'
import ExternalLinkButton from '../components/external_link_button'
import { PlausibleEvents } from '../types'
import styles from './about.module.scss'

const About: FC = () => {
  const plausible = usePlausible<PlausibleEvents>()

  return (
    <>
      <Head>
        <title>Salvum | About</title>
        <meta name="description" content="About Salvum" />
      </Head>
      <div className={styles.container}>
        <h1>About</h1>

        <div className={styles.card}>
          <p>
            My name is Noah, and I believe open access to information is one of the best tools we have to support
            well-being while fighting stigma and prejudice caused by the War on Drugs. Salvum consolidates harm
            reduction resources in one place in an effort to make safety in or around altered states of consciousness as
            easy as possible.
          </p>
        </div>

        <div className={styles.card}>
          <p>
            All substance information is sourced from PsychonautWiki and TripSit, two organizations with open databases
            of information on many substances.
          </p>
        </div>

        <ExternalLinkButton
          LeftIconComponent={IoMail}
          title="Contact me at noah@salvum.love"
          url="mailto:noah@salvum.love"
          containerStyle={{ marginBottom: 4 }}
        />
        <ExternalLinkButton
          LeftIconComponent={IoCodeSlash}
          title="View source code"
          url="https://github.com/NoahSaso/salvum"
        />

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
            Icon={<IoLogoVenmo size={24} />}
            data="NoahSaso"
            callback={() => plausible('venmo')}
          />
          <ClipboardButton
            Icon={<SiMonero size={24} />}
            data="88MbTyekREM45CZRLq8R3KNqCQssTZH9T1du3iiQKxYqjLd3ZR9afgT1Wt5nWA1vYXRP8bANGcm9TA96zdQ6c1NS82owQWX"
            callback={() => plausible('xmr')}
          />
          <ClipboardButton
            Icon={<SiEthereum size={24} />}
            data="0x94A47454cFA7409B5a54862538C4320A675F4b29"
            callback={() => plausible('eth')}
          />
          <ClipboardButton
            Icon={
              <Image
                src="/img/solana.svg"
                width={24}
                height={24}
                alt="SOL"
              />
            }
            data="6v7hHrEndb3CNk1RHeu52ovT7DXcWA1Zm5NZg8yq72GX"
            callback={() => plausible('sol')}
          />
          <ClipboardButton
            Icon={<SiBitcoin size={24} />}
            data="1DXpZnZMSaShaQNTcgwdQBLkd97VeBWxqd"
            callback={() => plausible('btc')}
          />
        </div>

        <a
          className={styles.license}
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="license noopener noreferrer"
        >
          <Image
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            alt="Creative Commons License"
            width={88}
            height={31}
          />
          <p>
            This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
          </p>
        </a>
      </div>
    </>
  )
}

export default About
