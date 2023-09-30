import React from 'react';

import { Post } from '@domain';
import { Box, ProfileAvatar, Text } from '@components';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('ProfileScreen', { userId: author.id });
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" marginBottom="s16" marginLeft="s24">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text preset="paragraphMedium" medium marginLeft="s12">
          {author.name}
        </Text>
      </Box>
    </Pressable>
  );
}
