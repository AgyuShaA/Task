'use client';

import { useGetPosts } from '@/entities/post/api';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import PostsFilters from './post-filters.component';
import PostsList from './posts-list.component';
import { Post } from '@/entities/post/models/post.types';
import { usePostsFilterStore } from '@/modules/post';
import { SortOrder } from '@/modules/post/posts-filter.store';

interface PostsListContainerProps {
  posts: Post[];
}

export default function PostsListContainer({ posts }: PostsListContainerProps) {
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

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <PostsFilters />
      <PostsList posts={filteredPosts} />
    </div>
  );
}
