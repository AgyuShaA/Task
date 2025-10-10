// /lib/growthbook/server.ts
import { configureServerSideGrowthBook } from '@/pkg/integrations/growthbook/growthBookServer'
import { GrowthBook } from '@growthbook/growthbook'

let gbInstance: GrowthBook | null = null

export async function getServerGrowthBook() {
  if (gbInstance) return gbInstance
  configureServerSideGrowthBook()

  const gb = new GrowthBook({
    apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
    clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
    enableDevMode: true,
  })

  // set user or environment attributes
  await gb.setAttributes({
    id: '123',
    employee: true,
  })

  gbInstance = gb
  return gb
}
