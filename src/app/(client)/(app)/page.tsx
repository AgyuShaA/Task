import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { HomeModule } from '../modules/home'
import { postQueryOptions } from '@/client/entities/api/post'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { error } from 'console'

export const revalidate = 30
export const dynamic = 'force-static'

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(postQueryOptions())

  const dehydratedState = dehydrate(queryClient)
  throw error('Test error for Sentry')
  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<p>Loading posts...</p>}>
        {/* You can pass experiment info to your module */}
        <HomeModule />
      </Suspense>
    </HydrationBoundary>
  )
}
