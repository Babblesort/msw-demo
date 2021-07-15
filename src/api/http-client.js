import axios from 'axios';

export const baseUrl = 'http://localhost:5000/api';

export const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});
