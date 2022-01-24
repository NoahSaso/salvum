/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const withPWA = require('next-pwa')
const path = require('path')

module.exports =
  withPWA({
    pwa: {
      dest: 'public'
    },
    images: {
      domains: ['i.creativecommons.org']
    },
    ...withPlausibleProxy({
      customDomain: "https://plausible.noahsaso.com"
    })({
      reactStrictMode: true,
      sassOptions: {
        includePaths: [path.join(__dirname, 'assets')]
      },
      async rewrites() {
        return [
          {
            source: '/s/:substance',
            destination: '/'
          }
        ]
      }
    })
  })
