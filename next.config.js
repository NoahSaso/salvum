const { withPlausibleProxy } = require("next-plausible")
const withPWA = require("next-pwa")
const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "assets")],
  },
  async rewrites() {
    return [
      {
        source: "/s/:substance",
        destination: "/",
      },
    ]
  },
  images: {
    domains: ["i.creativecommons.org"],
  },
}

/** @type {import('next-pwa').PWAConfig} */
const pwaConfig = {
  dest: "public",
  // Disable PWA in development.
  disable: process.env.NODE_ENV === "development",
}

/** @type {import('next-plausible').NextPlausibleProxyOptions} */
const plausibleProxyOptions = {}

module.exports = withPWA(pwaConfig)(
  withPlausibleProxy(plausibleProxyOptions)(nextConfig),
)
