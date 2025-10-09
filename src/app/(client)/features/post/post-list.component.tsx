'use client'

import { Post } from '@/app/(client)/entities/models/post.model'
import { PostCard } from '@/app/(client)/shared/ui/post-card'
import { useEffect } from 'react'
import usePostsFilterStore from '../../shared/store/posts-filter.store'
import { useQuery } from '@tanstack/react-query'
import { postQueryOptions } from '../../entities/api/post'

export default function PostList() {
  const { data: postsData, isLoading, isError } = useQuery(postQueryOptions())

  const { filteredPosts, setPosts } = usePostsFilterStore()

  useEffect(() => {
    if (postsData) setPosts(postsData)
  }, [postsData, setPosts])

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error loading posts</p>

  return (
    <div className='mx-auto max-w-3xl space-y-6'>
      {filteredPosts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
