import dynamic from 'next/dynamic'

const PostFilters = dynamic(() => import('@/client/features/post').then((m) => m.PostListFilters))
const PostList = dynamic(() => import('@/client/features/post').then((m) => m.PostList))

export default function PostComponent() {
  return (
    <div className='mx-auto max-w-3xl space-y-4 p-4'>
      <PostFilters />
      <PostList />
    </div>
  )
}
