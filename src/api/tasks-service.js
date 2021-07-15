import { httpClient } from './http-client';

export const getTasks = () => httpClient.get('/tasks');
