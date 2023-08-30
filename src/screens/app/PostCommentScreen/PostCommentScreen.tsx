import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Screen } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList } from '@domain';

import { PostCommentItem, PostCommentBottom } from './components';
import { useAppSafeArea } from '@hooks';

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const { data: list, fetchNextPage, hasNextPage } = usePostCommentList(postId);
  const { bottom } = useAppSafeArea();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: bottom }}
        ListFooterComponent={
          <PostCommentBottom fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
        }
      />
    </Screen>
  );
}
