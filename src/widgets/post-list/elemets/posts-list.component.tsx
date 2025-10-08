'use client';

import { useGetPosts } from '@/entities/post/api';
import { Post } from '@/entities/post/models/post.model';
import { usePostsFilterStore } from '@/modules/post';
import { PostCard } from '@/shared/ui/post-card';
import { useEffect } from 'react';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  const { data: postsData = posts, isLoading, isError } = useGetPosts({ initialData: posts });

  const { filteredPosts, setPosts } = usePostsFilterStore();

  useEffect(() => {
    if (postsData) setPosts(postsData);
  }, [postsData, setPosts]);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {filteredPosts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
