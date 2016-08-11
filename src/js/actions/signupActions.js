import api from '../webApiConfigure';

export const userSignupRequest = (userData) => {
    return () => {
        return api.post('/user/', { ...userData })
    }
};
