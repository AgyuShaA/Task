import { useQuery } from '@tanstack/react-query';
import { Post } from '../models/post.model';
import { fetchPost } from './get-post.api';

interface UseGetPostOptions {
  id: string;
  initialData?: Post;
}

export const useGetPost = ({ id, initialData }: UseGetPostOptions) =>
  useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => {
      console.log('Fetching posts from API... /posts/id?=', id);

      return fetchPost(id);
    },
    staleTime: 30_000,
    refetchInterval: 30_000,
    initialData,
  });
