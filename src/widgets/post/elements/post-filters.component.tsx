"use client";

import { Input, Button } from "@heroui/react";
import usePostsFilterStore from "@/shared/store/posts-filter.store";
import { useSearchParams, useRouter } from "next/navigation";

export default function PostsFilters() {
  const { sortOrder, setSortOrder } = usePostsFilterStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchParam = searchParams.get("search") || "";

  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("search", value);
    else params.delete("search");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const buttonClass = (order: typeof sortOrder) =>
    `rounded-md px-4 py-1 transition ${
      sortOrder === order
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-blue-200"
    }`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-6">
      <Input
        placeholder="Search posts..."
        defaultValue={searchParam}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="mb-3 sm:mb-0 sm:flex-1 border p-2 border-gray-300  rounded-lg shadow-sm transition"
      />

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onPress={() => setSortOrder("title-asc")}
          className={buttonClass("title-asc")}
        >
          A → Z
        </Button>
        <Button
          size="sm"
          onPress={() => setSortOrder("title-desc")}
          className={buttonClass("title-desc")}
        >
          Z → A
        </Button>
        <Button
          size="sm"
          onPress={() => setSortOrder("id-asc")}
          className={buttonClass("id-asc")}
        >
          Oldest
        </Button>
        <Button
          size="sm"
          onPress={() => setSortOrder("id-desc")}
          className={buttonClass("id-desc")}
        >
          Newest
        </Button>
      </div>
    </div>
  );
}
