import { User } from './userTypes';
import { userApi } from './userApi';
import { userAdapter } from './userAdapter';

async function getUser(id: number): Promise<User> {
  const userAPI = await userApi.getUser(id);
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getUser,
};
