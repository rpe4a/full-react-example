import axios from './webApiConfigure';
import cache from 'js-cache';

export default function postCache(url, data) {

    const cacheData = cache.get(url);

    if (cacheData) {

        return new Promise((resolve) => {
            resolve({ data: cacheData});
        });
    } else {
        return axios.post(url, data).then(res => {
            cache.set(url, res.data)
            return res;
        })
    }
}



