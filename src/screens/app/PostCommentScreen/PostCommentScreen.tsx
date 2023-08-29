import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import React from 'react';

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen title="Comentários" canGoBack>
      <Text>PostCommentScreen</Text>
    </Screen>
  );
}
