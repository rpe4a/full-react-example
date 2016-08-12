import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default (data) => {
    let errors = {}

    if (validator.isNull(data.username)) {
        errors.username = 'Поле - Имя должно быть заполнено';
    }
    if (validator.isNull(data.email)) {
        errors.email = 'Поле - Email должно быть заполнено';
    }
    if (validator.matches(data.email, /^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)*[a-zA-Z]{2,6}$/)) {
        errors.email = 'Поле - Email введено не корректно';
    }
    if (validator.isNull(data.password)) {
        errors.password = 'Поле - Пароль должно быть заполнено';
    }
    if (!validator.matches(data.password, /([\w!@#$%^&*()]){6,18}/g)) {
        errors.password = 'Поле - Пароль введено не корректно';
    }
    if (validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Поле - Подтверждение пароля должно быть заполнено';
    }
    if (!validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Введеные пароли должны совпадать';
    }
    if (validator.isNull(data.timezone)) {
        errors.timezone = 'Поле - Часовой пояс должно быть заполнено';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
};
