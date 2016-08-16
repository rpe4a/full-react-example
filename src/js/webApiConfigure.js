import axios from 'axios'

let instance = axios;

if (process.env.NODE_ENV !== 'production') {
    instance = axios.create({
        baseURL: 'http://localhost:2270/api/',
    });
}

export default instance;

