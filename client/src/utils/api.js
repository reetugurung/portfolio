import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});

// This automatically attaches your token to requests if you are logged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem('adminToken')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('adminToken')}`;
  }
  return req;
});

export default API;