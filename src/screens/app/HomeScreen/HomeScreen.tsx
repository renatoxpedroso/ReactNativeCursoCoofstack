import React, { useEffect, useState } from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';

import { AppTabScreenProps } from '@routes';
import { PostItem, Screen, Text } from '@components';
import { Post, postService } from '@domain';
import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchDate() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDate();
  }, []);

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
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty refetch={fetchDate} error={error} loading={loading} />}
      />
    </Screen>
  );
}
