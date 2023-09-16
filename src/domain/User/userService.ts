import { Page } from '@types';
import { apiAdapter } from '@api';

import { User } from './userTypes';
import { userApi } from './userApi';
import { userAdapter } from './userAdapter';

async function getUser(id: number): Promise<Page<User>> {
  const userPageAPI = await userApi.getUser(id);

  return {
    data: userPageAPI.data.map(userAdapter.toUser),
    meta: apiAdapter.toMetaDataPage(userPageAPI.meta),
  };
}

export const userService = {
  getUser,
};
