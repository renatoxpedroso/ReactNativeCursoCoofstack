import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList((prev) => [...prev, ...list]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
    fetchNextPage,
  };
}
