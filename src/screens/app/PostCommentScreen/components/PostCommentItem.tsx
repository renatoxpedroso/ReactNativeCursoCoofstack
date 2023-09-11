import React from 'react';
import { Alert, Pressable } from 'react-native';

import { Box, ProfileAvatar, Text } from '@components';
import { PostComment, postCommentService, usePostCommentRemove } from '@domain';
import { useToastService } from '@services';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthoredId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({ postComment, userId, postAuthoredId, onRemoveComment }: Props) {
  const { showToast } = useToastService();
  const { mutate } = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({ message: 'Comentário deletado' });
    },
  });
  const isAllowToDelete = postCommentService.isAllowDelete(postComment, userId, postAuthoredId);

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({ postCommentId: postComment.id }),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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
    </Pressable>
  );
}
