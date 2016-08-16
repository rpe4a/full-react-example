import React, {Component} from 'react'
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { userLogout } from '../actions/signinActions';

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.userLogout = this.userLogout.bind(this);
    }

    userLogout(e) {
        e.preventDefault();

        this.props.userLogout();
    }

    render() {

        const { isAuthenticated } = this.props.signin;

        const userLinks = (
            <ul className='nav navbar-nav navbar-right'>
                <li><a href='#' onClick={this.userLogout}>Выйти</a></li>
            </ul>
        );

        const guestLinks = (
            <ul className='nav navbar-nav navbar-right'>
                <li><Link to='/signin'>Войти</Link></li>
                <li><Link to='/signup'>Регистрация</Link></li>
            </ul>
        );

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
                        { isAuthenticated ? userLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    signin: React.PropTypes.object.isRequired,
    userLogout: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        signin: state.signin
    };
}

export default connect(mapStateToProps, { userLogout })(NavigationBar);