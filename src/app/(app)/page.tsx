import { fetchPosts } from '@/entities/post/api';
import { PostsListContainer } from '@/widgets/post-list/elemets';
import { Suspense } from 'react';

export const revalidate = 30;

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <Suspense fallback={<p>Loading posts...</p>}>
      <PostsListContainer posts={posts} />
    </Suspense>
  );
}
