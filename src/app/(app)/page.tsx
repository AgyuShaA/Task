import { fetchPosts } from '@/entities/post/api';
import { PostsListContainer } from '@/widgets/post-list/elemets';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

export const revalidate = 30;

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['post'],
    queryFn: () => fetchPosts(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostsListContainer posts={queryClient.getQueryData(['post'])} />
      </Suspense>
    </HydrationBoundary>
  );
}
