import React, { useEffect, useState } from 'react';

import { AppTabScreenProps } from '@routes';
import { Box, Button, Screen, Text } from '@components';
import { Post, postService } from '@domain';
import { Dimensions, FlatList, Image, InteractionManager, ListRenderItemInfo } from 'react-native';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then((list) => setPostList(list));
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <Box>
        <Box flexDirection="row">
          <Image source={{ uri: item.author.profileURL }} style={{ width: 32, height: 32 }} />
          <Text>{item.author.name}</Text>
        </Box>
        <Image
          source={{ uri: item.imageURL }}
          style={{ width: Dimensions.get('screen').width, height: 300 }}
          resizeMode="cover"
        />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList data={postList} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </Screen>
  );
}
