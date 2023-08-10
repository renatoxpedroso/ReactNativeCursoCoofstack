import React from 'react';

import { AuthScreenProps } from '@routes';
import { Screen, Icon, Text, Button } from '@components';

export function SuccessScreen({ route }: AuthScreenProps<'SuccessScreen'>) {
  function goBackToLoginScreen() {
    // TODO
  }

  return (
    <Screen>
      <Icon name={route.params.icon.name} color={route.params.icon.color} />
      <Text preset="headingLarge" marginTop="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToLoginScreen} title="Volar ao início" marginTop="s40" />
    </Screen>
  );
}
