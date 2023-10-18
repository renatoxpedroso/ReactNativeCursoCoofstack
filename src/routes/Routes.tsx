import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuthCredentials } from '@services';

export function Router() {
  const { authCredentials } = useAuthCredentials();
  return (
    <NavigationContainer>{authCredentials ? <AppStack /> : <AuthStack />}</NavigationContainer>
  );
}
