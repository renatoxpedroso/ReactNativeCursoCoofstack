import { api } from '@api';

import { AuthCredentialsAPI, FieldIsAvailableAPI, SignUpData } from './authTypes';
import { UserAPI } from '../User/userTypes';

async function signIn(email: string, password: string): Promise<AuthCredentialsAPI> {
  const response = await api.post('auth/login', { email, password });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpData): Promise<UserAPI> {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
}

async function isUserNameAvailable(params: { username: string }): Promise<FieldIsAvailableAPI> {
  console.log(params);
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-username', { params });
  return response.data;
}

async function isEmailAvailable(params: { email: string }): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-email', { params });
  return response.data;
}

async function forgotPassword(params: ForgotPasswordParam): Promise<{ message: string }> {
  const response = await api.post<{ message: string }>('forgot-password', params);

  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
};
