import { PostComment, PostCommentAPI } from '@domain';

/**
 * @description Adapta o PostCommentAPI para o modelo de PostComment
 */
function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    createdAt: postCommentAPI.created_at,
    author: {
      id: postCommentAPI.user.id,
      profileURL: postCommentAPI.user.profile_url,
      name: postCommentAPI.user.full_name,
      userName: postCommentAPI.user.username,
    },
  };
}

export const postCommentAdapter = { toPostComment };
