import { useCallback, useEffect, useState } from 'react';

import { userService } from '../userService';
import { User } from '../userTypes';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@infra';

export function useUserGetById(id: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getUser(id),
    staleTime: 1000 * 30,
  });

  return {
    user: data,
    isLoading,
    isError,
  };
}
