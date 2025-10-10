import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'

import { HomeModule } from '../modules/home'
import { postQueryOptions } from '@/client/entities/api/post'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import * as Sentry from '@sentry/nextjs'

export const revalidate = 30
export const dynamic = 'force-static'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: true,
  tracesSampleRate: 1.0,
})

export default async function Home() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(postQueryOptions())

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<p>Loading posts...</p>}>
        <HomeModule />
      </Suspense>
    </HydrationBoundary>
  )
}
