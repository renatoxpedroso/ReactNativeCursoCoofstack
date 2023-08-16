import React from 'react';
import { Box, Text } from '@components';
import { Post } from '@domain';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({ author, text, commentCount }: Props) {
  let commentText = getCommentText(commentCount);

  return (
    <Box ml="s24">
      <Text bold preset="paragraphMedium" mt="s16">
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1" mt="s4">
        {text}
      </Text>
      {commentText && (
        <Text bold preset="paragraphMedium" color="primary" mt="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'Ver Comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
