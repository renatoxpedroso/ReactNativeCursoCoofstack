import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization: 'Bearer MQ.e5Osy75uFtNwWezms5qVQoBO97BXm1FG2Ms2xSRi_NOwcjUA8KM69uOvAY3N',
  },
});
