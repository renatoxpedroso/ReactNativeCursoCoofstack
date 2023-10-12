import { authAdapter } from './authAdapter';
import { authApi } from './authApi';
import { AuthCredentials } from './authTypes';

async function signIn(email: string, password: string): Promise<AuthCredentials> {
  try {
    const AuthCredentialAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(AuthCredentialAPI);
  } catch (error) {
    throw new Error('email ou senha inválidos');
  }
}

async function signOut(): Promise<string> {
  const response = await authApi.signOut();
  return response;
}

export const authService = {
  signIn,
  signOut,
};
