import { MutationOptions, useMutation } from '@infra';
import React from 'react';
import { postCommentService } from '../postCommentService';

export function usePostCommentRemove(option?: MutationOptions<string>) {
  return useMutation<{ postCommentId: number }, string>(
    ({ postCommentId }) => postCommentService.remove(postCommentId),
    option
  );
}
