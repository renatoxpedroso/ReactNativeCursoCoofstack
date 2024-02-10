import { api } from '@api';
import { authAdapter } from './authAdapter';
import { authApi } from './authApi';
import { AuthCredentials, SignUpData } from './authTypes';

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

async function signUp(data: SignUpData): Promise<void> {
  await authApi.signUp(data);
}

function updateToken(token: string) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common['Authorization'] = null;
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const response = await authApi.isUserNameAvailable({ username });
  return response.isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const response = await authApi.isEmailAvailable({ email });
  return response.isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  const { message } = await authApi.forgotPassword({ email });
  return message;
}

async function authenticateByRefreshToken(refreshToken: string): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(acAPI);
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
  isUserNameAvailable,
  isEmailAvailable,
  requestNewPassword,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
