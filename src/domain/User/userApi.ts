import { PageAPI, api } from '@api';

import { UserAPI } from './userTypes';

let PATH = 'users';

async function getUser(id?: number): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${PATH}/${id}`);

  return response.data;
}

export const userApi = {
  getUser,
};
