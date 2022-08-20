import axios from 'axios';
import { getBackendURL } from './conf';

const ax = axios.create({ baseURL: getBackendURL() });
ax.defaults.timeout = 5000;
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
ax.defaults.headers.common['Content-Type'] = 'multipart/form-data';

export default ax;
