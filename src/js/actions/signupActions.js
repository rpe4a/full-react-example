import api from '../webApiConfigure';

export const userSignupRequest = (userData) => {
    return () => {
        return api.post('/registration/', { ...userData })
    }
};

export const isUserExists = (userData) =>  {
    return () => {
        return api.post('/isUser/', { ...userData})
    }

};


