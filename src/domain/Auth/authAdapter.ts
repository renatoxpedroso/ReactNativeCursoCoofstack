import { userAdapter } from '../User/userAdapter';

import { AuthCredentialsAPI, AuthCredentials } from './authTypes';

function toAuthCredentials(authCredentialsAPI: AuthCredentialsAPI): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = { toAuthCredentials };
