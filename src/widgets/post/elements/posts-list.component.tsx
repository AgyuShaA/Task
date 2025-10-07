"use client";

import { Post } from "@/entities/post/model/post.types";
import { PostCard } from "@/shared/ui/post-card";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  if (!posts.length)
    return <p className="text-center text-gray-500">No posts found.</p>;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
