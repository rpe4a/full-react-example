import React, {Component} from 'react'
import cache from 'js-cache';

class Greetings extends Component {
    render() {

        console.log(cache.get('/login/'));

        return (
            <div className='jumbotron'>
                <h1>Приветствую тебя, повелитель!</h1>
            </div>
        )
    }
}

export default Greetings