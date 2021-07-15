import { httpClient } from './httpClient';

export const getTasks = async () => await httpClient.get('/tasks');
