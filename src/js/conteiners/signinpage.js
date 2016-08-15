import React, {Component} from 'react'
import SigninForm from '../components/signinform';
import {connect} from 'react-redux';
import { userLogin } from '../actions/signinActions';

class SigninPage extends Component {
    render() {
        const { userLogin } = this.props;

        return (
            <div className='row'>
                <div className='col-md-4 col-md-offset-4'>
                    <SigninForm userLogin={userLogin}/>
                </div>
            </div>

        )
    }
}

SigninPage.propTypes = {
    userLogin: React.PropTypes.func.isRequired,
};

export default connect(null, { userLogin })(SigninPage)