"use client";

import { useGetPosts } from "@/entities/post/api";
import usePostsFilterStore, {
  SortOrder,
} from "@/shared/store/posts-filter.store";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import PostsFilters from "./post-filters.component";
import PostsList from "./posts-list.component";

export default function PostsListContainer() {
  const { data: posts, isLoading, error } = useGetPosts();
  const { sortOrder } = usePostsFilterStore();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

    result.sort((a, b) => {
      switch (sortOrder) {
        case SortOrder.TitleAsc:
          return a.title.localeCompare(b.title);
        case SortOrder.TitleDesc:
          return b.title.localeCompare(a.title);
        case SortOrder.IdAsc:
          return a.id - b.id;
        case SortOrder.IdDesc:
          return b.id - a.id;
      }
    });

    return result;
  }, [posts, search, sortOrder]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <PostsFilters />
      <PostsList posts={filteredPosts} />
    </div>
  );
}
