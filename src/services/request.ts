import axios from 'axios';

const baseUrl = '/api';

export const request = axios.create({
  baseURL: baseUrl,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => {
    // TODO get token
    const access_token = 'token ';
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  (err) => {
    console.log(err);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error?.response?.status === 401) {
      console.log('Request failed with status 401 Unauthorized.');
    } else {
      return Promise.reject(error);
    }
  }
);
