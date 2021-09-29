/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy({
  customDomain: "https://plausible.noahsaso.com"
})({
  reactStrictMode: true,
})
