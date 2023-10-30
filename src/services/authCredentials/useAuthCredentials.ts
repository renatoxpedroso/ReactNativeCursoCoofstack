import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '../storage';
import { useContext } from 'react';

import { AuthCredentialsService } from './authCredentialsType';
import { AuthCredentialsContext } from './Providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error('AuthCredentials should be used within a AuthCredentialsProvider');
  }

  return context;
}
