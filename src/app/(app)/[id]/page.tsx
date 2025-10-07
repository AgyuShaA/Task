"use client";

import { useGetPost } from "@/entities/post/api/use-get-post.api";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/shared/ui/button";
import { PostCard } from "@/shared/ui/post-card";

export default function PostPage() {
  const params = useParams();
  const id = params?.id;

  const { data: post, isLoading, error } = useGetPost(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error || !post) return <p>Error loading post</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <PostCard post={post} showButton={false} />

      <div className="flex items-center w-full justify-center">
        <Link href="/">
          <Button size="sm" variant="primary">
            Back to All Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}
