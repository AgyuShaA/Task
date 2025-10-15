import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'

import { postQueryOptions } from '@/client/entities/api/post'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

import { getServerGrowthBook } from '@/pkg/integrations/growthbook/server'
import { HomeModule } from '../../modules/home'

export const revalidate = 30
export const dynamic = 'force-static'

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(postQueryOptions())

  const gb = await getServerGrowthBook()
  const featureEnabled = gb.isOn('my-feature')
  console.log('featureEnabled', featureEnabled) // rue

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<p>Loading posts...</p>}>
        <HomeModule />
      </Suspense>
    </HydrationBoundary>
  )
}
