import { useQuery } from "@tanstack/react-query";
import { Post } from "../model/post.types";

export const useGetPosts = () =>
  useQuery<Post[]>({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!res.ok) throw new Error("Failed to fetch post");
      return res.json();
    },
    staleTime: 30_000,
    refetchInterval: 30_000,
  });
