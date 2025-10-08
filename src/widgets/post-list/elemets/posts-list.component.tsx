'use client';

import { useGetPosts } from '@/entities/post/api';
import { Post } from '@/entities/post/models/post.model';
import { usePostsFilterStore } from '@/modules/post';
import { PostCard } from '@/shared/ui/post-card';
import { useEffect } from 'react';

interface PostsListProps {
  posts: Post[];
}
('use client');

export default function PostsList({ posts }: PostsListProps) {
  const { data: postsData = posts, isLoading, isError } = useGetPosts({ initialData: posts });

  const { filteredPosts, setPosts, setSearch, setSortOrder } = usePostsFilterStore();

  useEffect(() => {
    if (postsData) setPosts(postsData);
  }, [postsData, setPosts]);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Example UI controls */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <select onChange={(e) => setSortOrder(e.target.value as any)} className="border p-2 rounded">
        <option value="title-asc">Title ↑</option>
        <option value="title-desc">Title ↓</option>
        <option value="id-asc">ID ↑</option>
        <option value="id-desc">ID ↓</option>
      </select>

      {filteredPosts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
