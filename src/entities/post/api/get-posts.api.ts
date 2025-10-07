import { Post } from '../models/post.types';

export const fetchPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json() as Promise<Post[]>;
};
