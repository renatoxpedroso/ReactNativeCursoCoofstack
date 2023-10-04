import { postCommentService } from '../postCommentService';

import { QueryKeys, usePaginatedList } from '@infra';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList([QueryKeys.PostCommentList, postId], getList);
}
