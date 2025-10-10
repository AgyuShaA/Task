'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!

export function MixpanelPlrovider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!MIXPANEL_TOKEN) {
      console.warn('Mixpanel token is missing! Check your .env file.')
      return
    }

    mixpanel.init(MIXPANEL_TOKEN, { autocapture: true })
    mixpanel.track('App Loaded')
  }, [])

  return <>{children}</>
}
