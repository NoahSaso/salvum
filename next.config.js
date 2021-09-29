/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy({
  customDomain: "plausible.noahsaso.com"
})({
  reactStrictMode: true,
})
