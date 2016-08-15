import api from '../webApiConfigure';

export const userSignupRequest = (userData) => {
    return () => {
        return api.post('/user/', { ...userData })
    }
};

export const isUserExists = (userData) =>  {
    return () => {
        return api.post('/isUser/', { ...userData})
    }

};


