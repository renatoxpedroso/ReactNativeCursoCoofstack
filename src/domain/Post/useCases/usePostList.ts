import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchInitailData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(1);
      setPostList(list);
      setPage(2);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList((prev) => [...prev, ...list]);
      setPage((prev) => prev + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitailData();
  }, []);

  return {
    loading,
    error,
    postList,
    refresh: fetchInitailData,
    fetchNextPage,
  };
}
