import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import React from 'react';
import { usePostCommentList } from 'src/domain/PostComment/useCases/usePostCommentList';

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  return (
    <Screen title="Comentários" canGoBack>
      <Text>PostCommentScreen</Text>
    </Screen>
  );
}
