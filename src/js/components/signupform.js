import React, {Component} from 'react'
import timezones from '../../../data/timezones';
import classname from 'classnames';
import validateInputSignupForm from '../validation/signupform';
import InputFieldGroup from './inputfieidgroup';
import ButtonComponent from './buttoncomponent';

class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoding: false,
            invalid: false,
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }

    isValid() {
        const {errors, isValid} = validateInputSignupForm(this.state);

        if (!isValid) {
            this.setState({ errors })
        }

        return isValid;
    }

    processingError(error) {
        let inputs = error.response.data;
        let errors = {}

        inputs.map((input) => {
            errors[input.field] = input.message;
        });

        return errors;
    }

    checkUserExists(e) {
        e.preventDefault();

        const val = e.target.value;

        if (val !== '') {
            this.props.isUserExists(this.state)
                .then(() => {
                    this.setState({ errors: { username: '', email: '' }, invalid: false });
                })
                .catch((error) => {
                    let errors = this.processingError(error);

                    this.setState({ errors: errors, invalid: true });
                })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoding: true });
            this.props.userSignupRequest(this.state)
                .then(() => {

                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'Ваша регистация прошла успешно. Добро пожаловать!'
                    })

                    this.context.router.push('/');
                })
                .catch((error) => {
                    let errors = this.processingError(error);

                    this.setState({ errors: errors, isLoding: false });
                });
        }
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {errors} = this.state;
        const options = timezones.map((continent, index) => {
            let timezones = continent.zones;

            timezones = timezones.map((zone, index) => {
                return <option key={index} value={zone.value}>{zone.name}</option>
            })

            return <optgroup key={index} label={continent.group}>{timezones}</optgroup>
        });

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Для продолжения зарегистрируйтесь</h1>
                <InputFieldGroup
                    label='Имя'
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    placeholder='Ваше имя'
                    error={errors.username}
                    />
                <InputFieldGroup
                    label='Email'
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    placeholder='Ваш Email'
                    error={errors.email}
                    />
                <InputFieldGroup
                    label='Пароль'
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder='Ваш пароль'
                    error={errors.password}
                    />
                <InputFieldGroup
                    label='Подтверждение пароля'
                    type='password'
                    name='passwordConfirmation'
                    value={this.state.passwordConfirmation}
                    onChange={this.onChange}
                    placeholder='Подтвердите ваш пароль'
                    error={errors.passwordConfirmation}
                    />
                <div className={classname('form-group', { 'has-feedback has-error': errors.timezone }) }>
                    <label className='control-label'>Часовой пояс</label>
                    <select
                        className='form-control'
                        name='timezone'
                        onChange={this.onChange}
                        value={this.state.timezone}>
                        <option value='' disabled>Ваш часовой пояс</option>
                        {options}
                    </select>
                    {(errors.timezone) ? <span className='help-block'>{errors.timezone}</span> : ''}
                </div>
                <div className='form-group'>
                    <ButtonComponent
                        text='Регистрация'
                        isLoding={this.state.isLoding}
                        invalid={this.state.invalid}
                        className='btn btn-primary btn-lg'
                        />
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired,

};

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}


export default SignupForm