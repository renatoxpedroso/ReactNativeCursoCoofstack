import React, { useEffect, useState } from 'react';

import { AppTabScreenProps } from '@routes';
import { Box, Button, PostItem, Screen, Text } from '@components';
import { Post, postService } from '@domain';
import { Dimensions, FlatList, Image, InteractionManager, ListRenderItemInfo } from 'react-native';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then((list) => setPostList(list));
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <FlatList data={postList} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </Screen>
  );
}
