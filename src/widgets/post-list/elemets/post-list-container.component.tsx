import PostsFilters from './post-filters.component';
import PostsList from './posts-list.component';
import { Post } from '@/entities/post/models/post.types';

interface PostsListContainerProps {
  posts?: Post[];
}

export default function PostsListContainer({ posts }: PostsListContainerProps) {
  if (!posts) return null;
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <PostsFilters />
      <PostsList posts={posts} />
    </div>
  );
}
