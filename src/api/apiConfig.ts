import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization: 'Bearer MQ.iWhS6iAMSgOyAgEM-JPrtdaLzLqwQkkmBOLfd9Uu3K56b4zxGt3XqEb8CxYa',
  },
});
