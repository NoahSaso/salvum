import Head from 'next/head'
import { FC } from 'react'

import Footer from './footer'
import Header from './header'

const TITLE = "Salvum"
const DESCRIPTION = "Salvum consolidates harm reduction resources in one place in an effort to make safety in or around altered states of consciousness as easy as possible."

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>{TITLE}</title>

      {/* General */}
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      {/* Icon stuff */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#111111" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* SEO */}
      <meta name="description" content={DESCRIPTION} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Social */}
      {/* Twitter */}
      <meta name="twitter:card" content="Consolidated substance and interaction information" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content="https://salvum.love/android-chrome-512x512.png" />
      {/* Open Graph */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://salvum.love" />
      <meta property="og:image" content="https://salvum.love/android-chrome-512x512.png" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={TITLE} /> 
    </Head>

    <Header />
    <main className="centered">{children}</main>
    <Footer />
  </>
)

export default Layout
