import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://take-notes-back.vercel.app/',
});
