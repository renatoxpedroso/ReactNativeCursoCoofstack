import { useContext } from 'react';
import { ToastContex } from './Providers/ToastProvider';
import { ToastService } from './tostTypes';

export function useToastContext(): ToastService {
  const context = useContext(ToastContex);
  if (!context) {
    throw new Error('Toast must be used witihn a ToastProvider');
  }

  return context;
}
