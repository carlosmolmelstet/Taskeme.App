import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44302/v1/'
});

export default api;