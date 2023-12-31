import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Box, Screen } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList, useUser } from '@domain';

import { PostCommentItem, PostCommentBottom, PostCommentTextMessage } from './components';
import { useAppSafeArea } from '@hooks';

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthoredId = route.params.postAuthoredId;
  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId);
  const { bottom } = useAppSafeArea();
  const { id } = useUser();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={id}
        postAuthorId={postAuthoredId}
      />
    );
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
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
