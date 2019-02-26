import axios from 'axios';

const config = {
    baseURL: '',
    headers: {}
}

if (process.env.NODE_ENV === 'development') {
    config.baseURL = 'http://localhost:4545';
}
  
const api = axios.create(config);

export default api;