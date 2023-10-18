import { User, UserAPI } from '../User/userTypes';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
  };
  user: UserAPI;
}

export interface SignInData {
  userName?: string;
  email?: string;
  passaword: string;
}