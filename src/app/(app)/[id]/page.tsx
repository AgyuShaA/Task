import Link from 'next/link';

import Button from '@/shared/ui/button';
import { fetchPost } from '@/entities/post/api';
import { PostCardDynamic } from '@/widgets/post-cards';

export const revalidate = 30;

export async function generateStaticParams() {
  return Array.from({ length: 100 }, (_, i) => ({ id: (i + 1).toString() }));
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const awaitedParams = await params;
  const { id } = awaitedParams;
  const post = await fetchPost(id);

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <PostCardDynamic initialPost={post} showButton={false} />

      <div className="flex items-center w-full justify-center">
        <Link href="/">
          <Button size="sm" variant="primary">
            Back to All Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}
