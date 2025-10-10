'use client'
import mixpanel from 'mixpanel-browser'

let initialized = false

export function initMixpanel() {
  if (!initialized) {
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? ''
    mixpanel.init(token, {
      debug: true,
      autocapture: true,
    })
    initialized = true
  }
  return mixpanel
}
