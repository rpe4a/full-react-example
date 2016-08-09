'use strict';

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');
require('css/_site.scss');

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
/*import { Provider } from 'react-redux'*/
import App from './conteiners/app'
/*import configureStore from './store/configureStore'*/
/*
const store = configureStore(); */

render(
        <App/>
    , document.getElementById('app')
)