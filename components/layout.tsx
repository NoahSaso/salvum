import Head from 'next/head'
import { FC } from 'react'

import Footer from './footer'
import Header from './header'

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>Salvum</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
