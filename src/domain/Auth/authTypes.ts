import { User, UserAPI } from '../User/userTypes';

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    refreshToken: string;
    expires_at: string;
    token: string;
  };
  user: UserAPI;
}

export interface SignInData {
  userName?: string;
  email?: string;
  passaword: string;
}

export interface SignUpData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordParam {
  email: string;
}
