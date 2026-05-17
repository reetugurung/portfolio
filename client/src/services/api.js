import axios from 'axios';


let rawBaseURL = process.env.NEXT_PUBLIC_API_URL;


let finalBaseURL = 'http://localhost:5001/api';

if (rawBaseURL && rawBaseURL !== 'undefined') {

  const cleanURL = rawBaseURL.endsWith('/') ? rawBaseURL.slice(0, -1) : rawBaseURL;
  finalBaseURL = `${cleanURL}/api`;
}

const API = axios.create({
  baseURL: finalBaseURL,
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