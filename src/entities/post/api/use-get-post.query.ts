import { useQuery } from '@tanstack/react-query';
import { Post } from '../models/post.types';
import { fetchPost } from './get-post.api';

interface UseGetPostOptions {
  id: string;
  initialData?: Post;
}

export const useGetPost = ({ id, initialData }: UseGetPostOptions) =>
  useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
    staleTime: 30_000,
    refetchInterval: 30_000,
    initialData,
  });
