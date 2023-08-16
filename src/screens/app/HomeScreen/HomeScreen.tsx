import React, { useEffect, useState } from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';

import { AppTabScreenProps } from '@routes';
import { PostItem, Screen, Text } from '@components';
import { Post, postService } from '@domain';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then((list) => setPostList(list));
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={{ paddingTop: 0, paddingHorizontal: 0, paddingBottom: 0 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
