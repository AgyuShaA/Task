import { createGrowthbookAdapter } from '@flags-sdk/growthbook'

const myGrowthBookAdapter = createGrowthbookAdapter({
  clientKey: process.env.GROWTHBOOK_CLIENT_KEY!,
  apiHost: process.env.GROWTHBOOK_API_HOST, // optional
  appOrigin: process.env.GROWTHBOOK_APP_ORIGIN, // optional
  edgeConfig: {
    connectionString: process.env.GROWTHBOOK_EDGE_CONNECTION_STRING!,
    itemKey: process.env.GROWTHBOOK_EDGE_CONFIG_ITEM_KEY, // optional
  },
  trackingCallback: (experiment, result) => {
    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    })
  },
  clientOptions: {}, // GrowthBook ClientOptions (optional)
  initOptions: {}, // GrowthBook InitOptions (optional)
  stickyBucketService: undefined, // Optional
})

export { myGrowthBookAdapter as growthbookAdapter }
