'use strict';

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');
require('css/_site.scss');

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import setAuthorizationToken from './utils/setAuthorizationToken';
import {setCurrentUser} from './actions/signinActions';

const store = configureStore();

//если есть токен то авторизуем
if (localStorage.token && localStorage.user) {
    setAuthorizationToken(localStorage.token)
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
}

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
)