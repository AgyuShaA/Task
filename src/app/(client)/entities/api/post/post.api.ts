import { notFound } from 'next/navigation'
import { QueryFunctionContext } from '@tanstack/react-query'

import { apiEndpoint, Post } from '../../models'
import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

const postQueryApi = async ({ queryKey }: QueryFunctionContext) => {
  const [, id] = queryKey as [string, string | undefined]

  const url = id ? `${apiEndpoint}/${id}` : apiEndpoint

  try {
    const res = await restApiFetcher
      .get(url, {
        cache: 'force-cache',
        next: { revalidate: 30 },
      })
      .json<Post | Post[]>()

    if (!res || (Array.isArray(res) && res.length === 0)) {
      notFound()
    }

    return res
  } catch (err) {
    console.error('Error fetching posts:', err)
    throw err
  }
}

export default postQueryApi
