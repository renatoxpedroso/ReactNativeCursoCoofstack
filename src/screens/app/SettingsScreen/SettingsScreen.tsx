import React from 'react';

import { AppScreenProps } from '@routes';
import { Button, Screen, Text } from '@components';
import { useAuthSignOut } from '@domain';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const { isLoading, signOut } = useAuthSignOut();
  return (
    <Screen flex={1} title="Configurações" canGoBack>
      <Button loading={isLoading} title="Sair da conta" onPress={signOut} />
    </Screen>
  );
}
