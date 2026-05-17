import axios from 'axios';

let prodURL = process.env.NEXT_PUBLIC_API_URL || '';
if (prodURL.endsWith('/')) {
  prodURL = prodURL.slice(0, -1);
}

const baseURL = prodURL 
  ? `${prodURL}/api` 
  : 'http://localhost:5001/api';

const API = axios.create({
  baseURL: baseURL,
});

API.interceptors.request.use((req) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default API;