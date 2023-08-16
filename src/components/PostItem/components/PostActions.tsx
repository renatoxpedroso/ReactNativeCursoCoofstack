import React from 'react';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';
import { Post } from '@domain';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({ reactionCount, commentCount, favoriteCount }: Props) {
  function likePost() {
    //TODO
  }

  return (
    <Box flexDirection="row" ml="s24" mt="s16">
      <Item
        onPress={likePost}
        icon={{ marked: 'heartFill', default: 'heart' }}
        text={reactionCount}
      />
      <Item
        onPress={likePost}
        icon={{ marked: 'comment', default: 'comment' }}
        text={commentCount}
      />
      <Item
        onPress={likePost}
        icon={{ marked: 'bookmarkFill', default: 'bookmark' }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  marked?: boolean;
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({ onPress, icon, marked, text }: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      alignItems="center"
      flexDirection="row"
      onPress={() => {
        onPress;
      }}
    >
      <Icon color={marked ? 'marked' : undefined} name={marked ? icon.marked : icon.default} />
      <Text preset="captionSmall" bold ml="s4">
        {text}
      </Text>
    </TouchableOpacityBox>
  );
}
