'use client'
import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface ClientAnalyticsProps {
  event: string
  properties?: Record<string, unknown>
}

export default function ClientAnalytics({ event, properties }: ClientAnalyticsProps) {
  useEffect(() => {
    mixpanel.init('YOUR_TOKEN') // initialize once
    mixpanel.track(event, properties)
    console.log(`Tracked event: ${event}`, properties)
  }, [event, properties])

  return null // this component renders nothing
}
