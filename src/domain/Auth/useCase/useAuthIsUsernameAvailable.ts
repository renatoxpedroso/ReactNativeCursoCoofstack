import { useDebounce } from '@hooks';
import { authService } from '../authService';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@infra';

interface Param {
  username: string;
  enabled: boolean;
}

export function useAuthIsUsernameAvailable({ username, enabled }: Param) {
  const debouncedUsername = useDebounce(username, 1500);

  const { data, isFetching } = useQuery({
    queryKey: [QueryKeys.IsUserNameAvaliable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 2000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isAvailable: !!data,
    isFetching: isFetching || isDebouncing,
  };
}
