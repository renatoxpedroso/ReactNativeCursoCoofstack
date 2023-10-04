import { useEffect, useState } from 'react';

import { Page } from '@types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { set } from 'date-fns';

interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<boolean | null>(null);
  // const [page, setPage] = useState(1);
  // const [hasNextPage, setHasNextPage] = useState(true);

  const query = useInfiniteQuery({
    queryKey: [],
    queryFn: async ({ pageParam = 1 }) => getList(pageParam),
    getNextPageParam: ({ meta }) => (meta.hasNextPage ? meta.currentPage + 1 : null),
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    list,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
