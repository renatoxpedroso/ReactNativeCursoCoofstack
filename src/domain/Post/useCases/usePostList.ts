import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchDate() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDate();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchDate,
  };
}
