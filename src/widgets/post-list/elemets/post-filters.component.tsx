'use client';

import { usePostsFilterStore } from '@/modules/post';
import { SortOrder } from '@/modules/post/posts-filter.store';
import { Input, Button } from '@heroui/react';

export default function PostsFilters() {
  const { search, setSearch, sortOrder, setSortOrder } = usePostsFilterStore();

  const buttonClass = (order: SortOrder) =>
    `rounded-md px-4 py-1 transition ${
      sortOrder === order ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
    }`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-6">
      <Input
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3 sm:mb-0 sm:flex-1 border p-2 border-gray-300 rounded-lg shadow-sm transition w-full"
      />

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onPress={() => setSortOrder(SortOrder.TitleAsc)}
          className={buttonClass(SortOrder.TitleAsc)}
        >
          A → Z
        </Button>
        <Button
          size="sm"
          onPress={() => setSortOrder(SortOrder.TitleDesc)}
          className={buttonClass(SortOrder.TitleDesc)}
        >
          Z → A
        </Button>
        <Button
          size="sm"
          onPress={() => setSortOrder(SortOrder.IdAsc)}
          className={buttonClass(SortOrder.IdAsc)}
        >
          Oldest
        </Button>
        <Button
          size="sm"
          onPress={() => setSortOrder(SortOrder.IdDesc)}
          className={buttonClass(SortOrder.IdDesc)}
        >
          Newest
        </Button>
      </div>
    </div>
  );
}
