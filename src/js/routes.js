import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './conteiners/app';
import Greetings from './conteiners/greetings';
import SignupPage from './conteiners/signuppage';


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Greetings} />
        <Route path='signup' component={SignupPage} />
    </Route>
) 
