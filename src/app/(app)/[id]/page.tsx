import { fetchPost } from '@/entities/post/api';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import PostCardDynamic from '@/widgets/post-cards/elemets/post-card-dynamic.component';
import Link from 'next/link';
import Button from '@/shared/ui/button';

export const revalidate = 30;

export async function generateStaticParams() {
  return Array.from({ length: 100 }, (_, i) => ({ id: (i + 1).toString() }));
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="p-4 max-w-2xl mx-auto space-y-4">
        <PostCardDynamic id={id} showButton={false} />
        <div className="flex items-center justify-center">
          <Link href="/">
            <Button size="sm" variant="primary">
              Back to All Posts
            </Button>
          </Link>
        </div>
      </div>
    </HydrationBoundary>
  );
}
