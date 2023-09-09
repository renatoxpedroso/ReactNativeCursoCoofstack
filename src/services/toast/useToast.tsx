import { ToastService } from './tostTypes';
import { useToastContext } from './useToastContext';

export function useToast(): ToastService {
  return useToastContext();
}
