const { withSentryConfig } = require('@sentry/nextjs')
const createNextIntlPlugin = require('next-intl/plugin')

const nextConfig = {
  outputFileTracingRoot: __dirname,
}

const nextConfigWithIntl = createNextIntlPlugin({ requestConfig: './src/pkg/libraries/locale/request.ts' })(nextConfig)

module.exports = withSentryConfig(nextConfigWithIntl, {
  org: 'ruby-labs-ov',
  project: 'javascript-nextjs',
  silent: !process.env.CI,
  disableLogger: true,
})
