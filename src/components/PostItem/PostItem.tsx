import React from 'react';

import { Post } from '@domain';
import { Box } from '@components';

import { PostHeader } from './components/PostHeader';
import { PostImage } from './components/PostImage';
import { PostActions } from './components/PostActions';

interface Props {
  post: Post;
}

export function PostItem({ post }: Props) {
  return (
    <Box marginBottom="s20">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
    </Box>
  );
}
