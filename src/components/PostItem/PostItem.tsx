import React from 'react';

import { Post } from '@domain';
import { Box } from '@components';

import { PostHeader } from './components/PostHeader';
import { PostImage } from './components/PostImage';
import { PostActions } from './components/PostActions';
import { PostBottom } from './components/PostBottom';

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
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
