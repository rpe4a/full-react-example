import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default (data) => {
    let errors = {}

    if (validator.isNull(data.email)) {
        errors.email = 'Поле - Email должно быть заполнено';
    }
    if (validator.isNull(data.password)) {
        errors.password = 'Поле - Пароль должно быть заполнено';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};