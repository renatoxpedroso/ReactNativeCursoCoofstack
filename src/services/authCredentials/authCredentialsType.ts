import { AuthCredentials } from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentias: (authCredentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
