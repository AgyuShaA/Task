"use client";

import { Card } from "@heroui/react";
import { Post } from "@/entities/post/models/post.types";
import Link from "next/link";
import Button from "@/shared/ui/button/button.component";

interface PostCardProps {
  post: Post;
  showButton?: boolean;
}

export default function PostCard({ post, showButton = true }: PostCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center gap-4 border border-gray-200 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold text-center">{post.title}</h2>
      <p className="text-center text-gray-700">{post.body}</p>
      {showButton && (
        <Link href={`/${post.id}`}>
          <Button size="sm" variant="primary">
            View Post
          </Button>
        </Link>
      )}
    </Card>
  );
}
