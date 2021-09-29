import '../styles/global.scss'

import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="plausible.noahsaso.com" selfHosted>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}
export default MyApp
