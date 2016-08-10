import axios from 'axios'

let instance = axios;

if (process.env.NODE_ENV !== 'production') {
    instance = axios.create({
        baseURL: 'http://localhost:45023/api/',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
}

export default instance;