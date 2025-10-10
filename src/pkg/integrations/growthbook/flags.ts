// flags.ts
import { growthbookAdapter } from '@flags-sdk/growthbook'
import { after } from 'next/server'

growthbookAdapter.setTrackingCallback((experiment, result) => {
  after(async () => {
    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    })
  })
})
