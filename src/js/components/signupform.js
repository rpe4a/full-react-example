import React, {Component} from 'react'
import api from '../webApiConfigure'
/*import $ from 'jquery'*/
import timezones from '../../../data/timezones';

class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();


        /*        $.post('http://localhost:45023/api/users', { user: this.state} , function(response){
                    console.log(response);  
                })*/

        api.post('/user/get', { ...this.state } )
            .then((response) => {
                console.log(response);
            });
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const options = timezones.map((continent, index) => {
            let timezones = continent.zones;

            timezones = timezones.map((zone, index) => {
                return <option key={index} value={zone.value}>{zone.name}</option>
            })

            return <optgroup key={index} label={continent.group}>{timezones}</optgroup>
        });

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Добро пожаловать!</h1>
                <div className='form-group'>
                    <label className='control-label'>Имя</label>
                    <input
                        type='text'
                        name='username'
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onChange}
                        />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Email</label>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Пароль</label>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Подтверждение пароля</label>
                    <input
                        type='password'
                        name='passwordConfirmation'
                        className='form-control'
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        />
                </div>

                <div className='form-group'>
                    <label className='control-label'>Часовой пояс</label>
                    <select
                        className='form-control'
                        name='timezone'
                        onChange={this.onChange}
                        value={this.state.timezone}>
                        <option value='' disabled>Выберите ваш часовой пояс</option>
                        {options}
                    </select>
                </div>


                <div className='form-group'>
                    <button className='btn btn-primary btn-lg'>
                        Войти
                    </button>
                </div>
            </form>
        )
    }
}

export default SignupForm