import { useQuery } from '@tanstack/react-query';
import { Post } from '../models/post.model';
import { fetchPosts } from './get-posts.api';

interface UseGetPostsOptions {
  initialData?: Post[];
}

export const useGetPosts = ({ initialData }: UseGetPostsOptions = {}) =>
  useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => {
      console.log('Fetching post from server... /posts');
      return fetchPosts();
    },
    initialData,
    staleTime: 30_000,
    refetchInterval: 30_000,
  });
