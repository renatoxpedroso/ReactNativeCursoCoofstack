import { createContext, useState } from 'react';
import { Toast, ToastService } from '../tostTypes';

export const ToastContex = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
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
    <ToastContex.Provider value={{ toast, showToast, hideToast: hiddenToast }}>
      {children}
    </ToastContex.Provider>
  );
}
