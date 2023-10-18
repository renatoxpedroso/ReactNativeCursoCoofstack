import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AuthCredentialsService } from './authCredentialsType';
import { storage } from '../storage';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>()(
  persist(
    (set) => ({
      authCredentials: null,
      saveCredentias: async (authCredentials) => {
        set({ authCredentials });
      },
      removeCredentials: async () => {
        set({ authCredentials: null });
      },
      isLoading: false,
    }),
    {
      name: '@Atuh',
      storage: storage,
    }
  )
);
