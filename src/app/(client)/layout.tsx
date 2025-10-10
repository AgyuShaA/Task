import '@/config/styles/globals.css'

import { UiProvider } from '../../pkg/libraries/ui'
import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',
  tracesSampleRate: 1.0,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const throwError = () => {
    try {
      throw new Error('🚨 Sentry test error!')
    } catch (error) {
      Sentry.captureException(error)
      console.error(error)
    }
  }
  throwError()

  return (
    <html lang='en' className='light' style={{ colorScheme: 'light' }}>
      <body className='antialiased' suppressHydrationWarning>
        <UiProvider>
          <RestApiProvider>{children}</RestApiProvider>
        </UiProvider>
      </body>
    </html>
  )
}
