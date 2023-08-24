import { MetaDataAPI, PageAPI } from '@api';
import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let reponse = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer MQ.e5Osy75uFtNwWezms5qVQoBO97BXm1FG2Ms2xSRi_NOwcjUA8KM69uOvAY3N',
    },
  });

  let data: PageAPI<PostAPI> = await reponse.json();

  return data;
  //await new Promise((resolve) => setTimeout(() => resolve(''), 1000));
  //return postListMock;
}

export const postApi = {
  getList,
};
