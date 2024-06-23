import Head from "next/head"
import { FC, ReactNode } from "react"

import Footer from "./footer"
import SafeInsetCover from "./safe_inset_cover"

const TITLE = "Salvum"
const DESCRIPTION =
  "Salvum consolidates harm reduction resources in one place in an effort to make safety in or around altered states of consciousness as easy as possible."

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Head>
      <title>{TITLE}</title>

      {/* General */}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />

      {/* PWA */}
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content={TITLE} />

      {/* SEO */}
      <meta name="description" content={DESCRIPTION} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Social */}
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="Consolidated substance and interaction information"
      />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta
        name="twitter:image"
        content="https://salvum.love/android-chrome-512x512.png"
      />
      {/* Open Graph */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://salvum.love" />
      <meta
        property="og:image"
        content="https://salvum.love/android-chrome-512x512.png"
      />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={TITLE} />

      {/* Theme stuff */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#111111" />

      {/* Icon stuff */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      {/* https://iosresolutions.com */}
      {/* iPhone 4, 4s */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/640x960.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/960x640.png"
      />
      {/* iPhone 5, 5S, 5C, SE */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/640x1136.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/1136x640.png"
      />
      {/* iPhone 6, 6S, 7, 8 */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/750x1334.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/1334x750.png"
      />
      {/* iPhone 6 Plus, 6S Plus, 7 Plus, 8 Plus */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/splash/1242x2208.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/splash/2208x1242.png"
      />
      {/* iPhone X, XS, 11 Pro */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/splash/1125x2436.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/splash/2436x1125.png"
      />
      {/* iPhone XR, 11 */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/828x1792.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/1792x828.png"
      />
      {/* iPhone XS Max, 11 Pro Max */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/splash/1242x2688.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/splash/2688x1242.png"
      />
      {/* iPhone 12, 12 Pro, 13, 13 Pro */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/splash/1170x2532.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/splash/2532x1170.png"
      />
      {/* iPhone 12 Mini, 13 Mini */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/splash/1080x2340.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/splash/2340x1080.png"
      />
      {/* iPhone 12 Pro Max, 13 Pro Max */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/splash/1284x2778.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        href="/splash/2778x1284.png"
      />

      {/* iPad (old and minis) */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/1536x2048.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/2048x1536.png"
      />
      {/* iPad Pro 1 */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/1668x2224.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/2224x1668.png"
      />
      {/* iPad Pro 3 */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/1668x2388.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/2388x1668.png"
      />
      {/* iPad Pro 2 */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        href="/splash/2048x2732.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        href="/splash/2732x2048.png"
      />
    </Head>

    <div id="container">
      <SafeInsetCover />
      <main className="centered">{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
