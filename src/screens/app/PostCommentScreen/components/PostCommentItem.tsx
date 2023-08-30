import React from 'react';

import { Box, ProfileAvatar, Text } from '@components';
import { PostComment } from '@domain';
import { dateUtils } from '@utils';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({ postComment }: Props) {
  return (
    <Box flexDirection="row" marginBottom="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12" flex={1}>
        <Text bold preset="paragraphSmall">
          {postComment.author.userName}
        </Text>
        <Text bold preset="paragraphSmall" color="gray1">
          {postComment.message} - {postComment.createdAtRealtive}
        </Text>
      </Box>
    </Box>
  );
}
