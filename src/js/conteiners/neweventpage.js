import React, {Component} from 'react'
import EventForm from '../components/eventform'

class NewEventPage extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-6'>
                     <EventForm />
                </div>
            </div>
        )
    }
}

export default NewEventPage