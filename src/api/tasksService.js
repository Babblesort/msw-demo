import httpClient from './httpClient';

export const getTasks = async () => {
  const response = await httpClient.get('/tasks');
  return response;
};
