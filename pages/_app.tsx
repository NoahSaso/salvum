import "../assets/global.scss"

import type { AppProps } from "next/app"
import PlausibleProvider from "next-plausible"

import Layout from "../components/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain="salvum.love"
      customDomain="https://ear.noahsaso.com"
      trackOutboundLinks
      taggedEvents
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}
export default MyApp
