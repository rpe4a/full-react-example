import api from '../webApiConfigure';

export const userLogin = (userData) => {
    return () => {
        return api.post('/login/', { ...userData })
    }
};
