import axios from 'axios';

export const apiDM = axios.create({
  baseURL: 'http://localhost:3030',
});
