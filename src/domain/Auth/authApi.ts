import { api } from '@api';

import { AuthCredentialsAPI, SignUpData } from './authTypes';
import { UserAPI } from '../User/userTypes';

async function signIn(email: string, password: string): Promise<AuthCredentialsAPI> {
  const response = await api.post('login', { email, password });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('profile/logout');
  return response.data;
}

async function signUp(data: SignUpData): Promise<UserAPI> {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};
