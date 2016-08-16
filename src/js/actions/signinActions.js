import api from '../webApiConfigure';
import {SET_CURRENT_USER} from '../actions/types';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const userLogin = (userData) => {
    return (dispatch) => {
        return api.post('/login/', { ...userData })
                    .then((res) => {
                        const {token, user} = res.data;

                        //сохраняем токен на клиенте
                        localStorage.setItem('token', token);
                        localStorage.setItem('user', JSON.stringify(user));

                        setAuthorizationToken(token); 

                        //добавляем данные в store
                        dispatch(setCurrentUser(user)); 
                    });
    };
};

export const setCurrentUser = (userData) => {
    return {
        type: SET_CURRENT_USER,
        user: userData
    };
};

export const userLogout = () =>  {
    return (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    };
};
