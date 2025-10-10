const { withSentryConfig } = require('@sentry/nextjs')
const nextConfig = {
  outputFileTracingRoot: __dirname,
}
// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, {
  org: 'ruby-labs-ov',
  project: 'javascript-nextjs',

  silent: !process.env.CI,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
})
