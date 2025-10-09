import dynamic from 'next/dynamic'

import Link from 'next/link'
import Button from '@/client/shared/ui/button'

const PostCardDynamic = dynamic(() => import('@/client/features/post').then((m) => m.PostCardDynamic))

interface PostIdComponentProps {
  id: string
}

export default function PostIdComponent({ id }: PostIdComponentProps) {
  return (
    <div className='mx-auto max-w-3xl space-y-4 p-4'>
      <PostCardDynamic id={id} showButton={false} />

      <div className='flex items-center justify-center'>
        <Link href='/'>
          <Button size='sm' variant='primary'>
            Back to All Posts
          </Button>
        </Link>
      </div>
    </div>
  )
}
