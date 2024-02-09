import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

import { AuthCredentials, authService } from '@domain';

import { AuthCredentialsService } from '../authCredentialsType';
import { authCredentialsStorage } from '../authCredentialsStorage';
import { api } from '@api';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({ children }: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] = useState<AuthCredentials | null>(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (responseError) => {
        if (responseError.response.status === 401) {
          if (!authCredentials?.refreshToken) {
            removeCredentials();
            return Promise.reject(responseError);
          }

          const failedRequest = responseError.config;

          const newAuthCredentials = await authService.authenticateByRefreshToken(
            authCredentials?.refreshToken
          );
          saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return api(failedRequest);
        }
      }
    );

    // remove listener when component unmount
    return () => api.interceptors.response.eject(interceptor);
  }, [authCredentials?.refreshToken]);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authCredentialsStorage.remove();
    authService.removeToken();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentials }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  );
}
