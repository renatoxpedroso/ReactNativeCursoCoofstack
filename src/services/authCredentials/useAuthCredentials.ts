import { create } from 'zustand';
import { AuthCredentialsService } from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>((set) => ({
  authCredentials: null,
  saveCredentias: async (authCredentials) => {
    set({ authCredentials });
  },
  removeCredentials: async () => {
    set({ authCredentials: null });
  },
  isLoading: false,
}));
