import { PageAPI, PageParams, api } from '@api';

import { PostCommentAPI } from './postCommentTypes';

async function getList(postId?: number, pageParams?: PageParams): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: { postId, ...pageParams },
  });
  return response.data;
}

export const postCommentApi = {
  getList,
};
