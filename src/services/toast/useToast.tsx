import { To } from '@react-navigation/native/lib/typescript/src/useLinkTo';
import React, { createContext, useContext, useState } from 'react';

interface Toast {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

const ToastContex = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
});

export function ToastProvider({ children }: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  return (
    <ToastContex.Provider value={{ toast, showToast, hiddenToast }}>
      {children}
    </ToastContex.Provider>
  );
}

export function useToast(): ToastService {
  const { toast, showToast, hiddenToast } = useContext(ToastContex);

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
