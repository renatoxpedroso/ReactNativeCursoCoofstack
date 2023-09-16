import { User, UserAPI } from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.firstName,
    lastName: userAPI.lastName,
    username: userAPI.username,
    email: userAPI.email,
    profileUrl: userAPI.profileUrl,
    isOnline: userAPI.isOnline,
    fullName: userAPI.fullName,
  };
}

export const userAdapter = { toUser };
