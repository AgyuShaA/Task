'use client'

import { Card } from '@heroui/react'
import Link from 'next/link'
import Button from '@/app/(client)/shared/ui/button'
import { postQueryOptionsById } from '../../entities/api/post'
import { useQuery } from '@tanstack/react-query'

interface PostCardProps {
  id: string
  showButton?: boolean
}

export default function PostCardDynamic({ id, showButton = true }: PostCardProps) {
  const { data: post } = useQuery(postQueryOptionsById(id))

  if (!post) return null

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
