import { Post } from '../models/post.types';

export const fetchPost = async (id: string) => {
  console.log('Fetching posts from API... /posts/id?=', id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json() as Promise<Post>;
};
