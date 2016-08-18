import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './conteiners/app';
import Greetings from './conteiners/greetings';
import SignupPage from './conteiners/signuppage';
import SigninPage from './conteiners/signinpage';
import NewEventPage from './conteiners/neweventpage';

import requiredAuth from './utils/requiredAuth';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Greetings} />
        <Route path='signin' component={SigninPage} />
        <Route path='signup' component={SignupPage} />
        <Route path='new-event' component={requiredAuth(NewEventPage)}/>
    </Route>
) 
