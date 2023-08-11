import React from 'react';

import { Post } from '@domain';

import { Box, Text } from '@components';
import { Image } from 'react-native';

type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16" marginLeft="s24">
      <Image
        source={{ uri: author.profileURL }}
        style={{ width: 32, height: 32, borderRadius: 14 }}
      />
      <Text preset="paragraphMedium" medium marginLeft="s12">
        {author.name}
      </Text>
    </Box>
  );
}
