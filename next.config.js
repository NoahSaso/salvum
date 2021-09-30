/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const path = require('path')

module.exports = withPlausibleProxy({
  customDomain: "https://plausible.noahsaso.com"
})({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets')]
  }
})
