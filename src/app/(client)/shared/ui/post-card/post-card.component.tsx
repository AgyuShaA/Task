'use client'

import { Card } from '@heroui/react'

import Link from 'next/link'
import Button from '../button'
import { Post } from '@/app/(client)/entities/models'

interface PostCardProps {
  post: Post
  showButton?: boolean
}

export default function PostCard({ post, showButton = true }: PostCardProps) {
  return (
    <Card className='flex flex-col items-center gap-4 rounded-lg border border-gray-200 p-6 shadow-sm'>
      <h2 className='text-center text-xl font-bold'>{post.title}</h2>

      <p className='text-center text-gray-700'>{post.body}</p>
      {showButton && (
        <Link href={`/${post.id}`}>
          <Button variant='primary'>View Post</Button>
        </Link>
      )}
    </Card>
  )
}
