import React from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';

import { AppTabScreenProps } from '@routes';
import { PostItem, Screen, Text } from '@components';
import { Post, usePostList } from '@domain';
import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { loading, error, postList, refetch, fetchNextPage } = usePostList();

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={{ paddingTop: 0, paddingHorizontal: 0, paddingBottom: 0, flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty refetch={refetch} error={error} loading={loading} />}
      />
    </Screen>
  );
}
