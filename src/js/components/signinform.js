import React, {Component} from 'react'
import InputFieldGroup from './inputfieidgroup';
import ButtonComponent from './buttoncomponent';
import Validation from '../validation/signinform';

ButtonComponent

class SingInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoding: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    isValid() {
        const { errors, isValid } = Validation(this.state);

        if (!isValid) {
            this.setState({ errors });
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

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoding: true })
            this.props.userLogin(this.state)
                .then(() => {
                    this.context.router.push('/')
                })
                .catch((error) => {
                    const errors = this.processingError(error);
                    this.setState({ errors, isLoding: false })
                })
        }
    }

    render() {

        const {errors, email, password, isLoding} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Добро пожаловать!</h1>
                { (errors.invalid_auth) ? <div className='alert alert-danger'>{errors.invalid_auth}</div> : ''}
                <InputFieldGroup
                    label='Email'
                    type='email'
                    name='email'
                    value={email} 
                    onChange={this.onChange}
                    placeholder='Ваш Email'
                    error={errors.email}
                    />
                <InputFieldGroup
                    label='Пароль'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.onChange}
                    placeholder='Ваш пароль'
                    error={errors.password}
                    />
                <div className='form-group'>
                    <ButtonComponent
                        text='Войти'
                        isLoding={isLoding}
                        className='btn btn-primary btn-lg'
                        />
                </div>

            </form>
        )
    }
}

SingInForm.propTypes = {
    userLogin: React.PropTypes.func.isRequired,
}

SingInForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SingInForm