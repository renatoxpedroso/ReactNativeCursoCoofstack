import React, { useEffect, useState } from 'react';

import { AppTabScreenProps } from '@routes';
import { Button, Screen, Text } from '@components';
import { Post, postService } from '@domain';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then((list) => setPostList(list));
  }, []);

  return (
    <Screen>
      {postList.map((post) => (
        <Text>{post.text}</Text>
      ))}
    </Screen>
  );
}
