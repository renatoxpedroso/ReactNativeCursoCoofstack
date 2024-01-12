import { useDebounce } from '@hooks';
import { authService } from '../authService';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@infra';

interface Param<T extends { length: number }> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvAvailableFunc: (value: T) => Promise<boolean>;
}

export function useAuthIsValueAvailable<T extends { length: number }>({
  value,
  enabled,
  queryKey,
  isAvAvailableFunc,
}: Param<T>) {
  const debouncedValue = useDebounce(value, 1500);

  const { data, isFetching } = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvAvailableFunc(debouncedValue),
    retry: false,
    staleTime: 2000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isAvailable: !!data,
    isUnavaliable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: username,
    enabled,
    queryKey: QueryKeys.IsUsernameAvaliable,
    isAvAvailableFunc: authService.isUserNameAvailable,
  });
}

export function useAuthIsEmailAvailable({ email, enabled }: { email: string; enabled: boolean }) {
  return useAuthIsValueAvailable({
    value: email,
    enabled,
    queryKey: QueryKeys.IsEmailAvailable,
    isAvAvailableFunc: authService.isEmailAvailable,
  });
}
