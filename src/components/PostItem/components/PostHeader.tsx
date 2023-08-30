import React from 'react';

import { Post } from '@domain';
import { Box, ProfileAvatar, Text } from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16" marginLeft="s24">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text preset="paragraphMedium" medium marginLeft="s12">
        {author.name}
      </Text>
    </Box>
  );
}
