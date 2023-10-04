import { useState } from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * @deprecated use useMutation from @tanstack/react-query
 */

export function useMutation<TVariables, TData>(
  mutationFn: (varables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(varables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(varables);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (error) {
      if (options?.onError) {
        options.onError(options.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
