import { useQuery } from '@tanstack/react-query';
import { Post } from '../models/post.types';
import { fetchPosts } from './get-posts.api';

interface UseGetPostsOptions {
  initialData?: Post[];
}

export const useGetPosts = ({ initialData }: UseGetPostsOptions = {}) =>
  useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
    initialData,
    staleTime: 30_000,
    refetchInterval: 30_000,
  });
