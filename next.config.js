/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  reactStrictMode: true,
})
