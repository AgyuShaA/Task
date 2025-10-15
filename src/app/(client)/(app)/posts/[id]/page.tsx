import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { postQueryOptionsById } from '@/client/entities/api/post'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { PostModule } from '@/app/(client)/modules/post'

export const revalidate = 30
export const dynamic = 'force-static'

export async function generateStaticParams() {
  return Array.from({ length: 100 }, (_, i) => ({ id: (i + 1).toString() }))
}

interface PostPageProps {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(postQueryOptionsById(id))

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className='mx-auto max-w-2xl space-y-4 p-4'>
        <PostModule id={id} />
      </div>
    </HydrationBoundary>
  )
}
