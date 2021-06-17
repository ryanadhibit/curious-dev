import axios from 'axios';
import apiConfig from '../configs/api.config';

const baseConfig = {
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  timeout: 60000,
  withCredentials: false,
};

async function GET(baseURL, endpoint, params = '', options = {}) {
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'get',
    url: apiConfig[endpoint] + params,
  };
  return axios(config);
}

function PUT(baseURL, endpoint, data = {}, params = '', options = {}) {
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'put',
    url: apiConfig[endpoint] + params,
    data: JSON.stringify(data),
  };
  return axios(config);
}

async function POST(
  baseURL,
  endpoint,
  data = {},
  params = '',
  token = '',
  options = {}
) {
  if (token) {
    baseConfig.headers.token = token;
  } else {
    delete baseConfig.headers.token;
  }
  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'post',
    url: apiConfig[endpoint] + params,
    data: JSON.stringify(data),
  };
  return axios(config);
}

async function POST_MULTIPATH(
  baseURL,
  endpoint,
  params = '',
  options = {},
  files,
  boundary
) {
  const config = {
    baseURL,
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
    },
    ...options,
    method: 'post',
    url: apiConfig[endpoint] + params,
    data: files,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };
  return axios(config);
}

const api = {
  get GET() {
    return GET;
  },
  get POST() {
    return POST;
  },
  get PUT() {
    return PUT;
  },
  get POST_MULTIPATH() {
    return POST_MULTIPATH;
  },
};

export default api;
