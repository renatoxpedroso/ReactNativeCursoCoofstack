import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Box, Screen, TextMessage } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList } from '@domain';

import { PostCommentItem, PostCommentBottom } from './components';
import { useAppSafeArea } from '@hooks';

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const { data: list, fetchNextPage, hasNextPage } = usePostCommentList(postId);
  const { bottom } = useAppSafeArea();
  const [message, setMessage] = useState('');

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={
            <PostCommentBottom fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
          }
        />
        <TextMessage
          placeholder="Adicione um Comentário"
          onPressSend={() => {}}
          value={message}
          onChangeText={setMessage}
        />
      </Box>
    </Screen>
  );
}
