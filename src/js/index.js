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

const store = configureStore(); 

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
)