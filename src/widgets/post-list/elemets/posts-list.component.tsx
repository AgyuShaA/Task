'use client';

import { useGetPosts } from '@/entities/post/api';
import { Post } from '@/entities/post/models/post.types';
import { usePostsFilterStore } from '@/modules/post';
import { SortOrder } from '@/modules/post/posts-filter.store';
import { PostCard } from '@/shared/ui/post-card';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  const { data: postsData = posts, isLoading, isError } = useGetPosts({ initialData: posts });

  const { sortOrder } = usePostsFilterStore();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const filteredPosts = useMemo(() => {
    if (!postsData) return [];

    const result = postsData.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );

    result.sort((a, b) => {
      switch (sortOrder) {
        case SortOrder.TitleAsc:
          return a.title.localeCompare(b.title);
        case SortOrder.TitleDesc:
          return b.title.localeCompare(a.title);
        case SortOrder.IdAsc:
          return a.id - b.id;
        case SortOrder.IdDesc:
          return b.id - a.id;
      }
    });

    return result;
  }, [postsData, search, sortOrder]);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;
  if (!posts.length) return <p className="text-center text-gray-500">No posts found.</p>;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
