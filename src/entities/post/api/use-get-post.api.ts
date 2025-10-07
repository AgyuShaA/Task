import { useQuery } from "@tanstack/react-query";
import { Post } from "../models/post.types";

export const useGetPost = (id: number) =>
  useQuery<Post>({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch post");
      return res.json();
    },
    staleTime: 30_000,
    refetchInterval: 30_000,
  });
