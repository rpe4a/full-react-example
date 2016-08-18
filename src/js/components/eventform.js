import React, {Component} from 'react'
import {connect} from 'react-redux'
import InputFieldGroup from './inputfieidgroup'
import ButtonComponent from './buttoncomponent'
import {createEvent} from '../actions/eventActions.js'

class EventForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            errors: {},
            isLoading: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(e);
        this.props.createEvent(this.state)
    }

    render() {

        const {title, errors, isLoading} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Новое событие</h1>

                <InputFieldGroup
                    name='title'
                    type='text'
                    value={title}
                    label='Событие'
                    placeholder='Ваше событие'
                    onChange={this.onChange}
                    errors = {errors.title}
                 />

                 <ButtonComponent
                     text='Создать'
                     className='btn btn-primary btn-lg'
                     isLoding={isLoading}                
                 />

            </form>
        )
    }
}

EventForm.propTypes = {
    createEvent: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm)