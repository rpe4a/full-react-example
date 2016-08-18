import api from '../webApiConfigure';

export const createEvent = (event) =>  {
    return () => {
        return api.post('event/create', event)
    }
};
