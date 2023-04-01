import { Toast } from 'antd-mobile';
import axios from 'axios';

import { getToken, removeCookies } from '../utils/cookie';
import history from '../utils/history';

const baseName = import.meta.env.VITE_API_ROUTER_URL;

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  // params: param,
  headers: {
    'content-type': 'application/json',
    timeout: 150000,
    withCredentials: true,
    responseType: 'json',
  },
});

service.interceptors.request.use(
  async (config) => {
    const accessToken = `${getToken()}` || '';

    config.headers = {
      Authorization: accessToken,
      Accept: 'application/json',
    };

    return config;
  },
  (error) => Promise.reject(error),
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    // const originalRequest = error.config;
    console.log('errorerrorerror', error); //log-xu
    const { response } = error;
    if (response) {
      const { status, data } = response;
      switch (status) {
        case 401:
          Toast.show({
            icon: 'fail',
            content: data.message,
          });
          removeCookies('token');
          history.push(`${baseName}/login`);
          break;
        case 403:
          Toast.show({
            icon: 'fail',
            content: data.message,
          });
          removeCookies('token');
          history.push(`${baseName}/403`);
          break;
        case 404:
          history.push(`${baseName}/404`);
          break;
        case 500:
          history.push(`${baseName}/500`);
          break;
        default:
          Toast.show({
            icon: 'fail',
            content: data.msg || '抱歉，请求失败',
          });
      }
    }
    return Promise.reject(error);
  },
);

export default service;
