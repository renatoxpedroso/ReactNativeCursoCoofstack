import React from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import { AppTabScreenProps } from '@routes';
import { PostItem, Screen, Text } from '@components';
import { Post, usePostList } from '@domain';

import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { loading, error, data: postList, refresh, fetchNextPage } = usePostList();

  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={{ paddingTop: 0, paddingHorizontal: 0, paddingBottom: 0, flex: 1 }}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty refetch={refresh} error={error} loading={loading} />}
      />
    </Screen>
  );
}
