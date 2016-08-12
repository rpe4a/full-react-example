import React, {Component} from 'react'
import { Link } from 'react-router';

class NavigationBar extends Component {
    render() {
        return (
            <nav className='navbar navbar-default' role='navigation'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to='/'>IAC</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav'>
                        </ul>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/signup'>Регистрация</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar