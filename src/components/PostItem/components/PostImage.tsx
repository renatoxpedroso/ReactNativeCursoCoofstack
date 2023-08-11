import React from 'react';

import { Post } from '@domain';

import { Dimensions, Image } from 'react-native';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({ imageURL }: Props) {
  return (
    <Image
      source={{ uri: imageURL }}
      style={{ width: Dimensions.get('screen').width, height: 300 }}
      resizeMode="cover"
    />
  );
}
