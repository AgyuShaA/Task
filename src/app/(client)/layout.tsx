import '@/config/styles/globals.css'

import { UiProvider } from '../../pkg/libraries/ui'
import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
