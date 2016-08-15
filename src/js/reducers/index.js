import { combineReducers } from 'redux'
import signup from './signup';
import flashMessages from './flashMessages';

export default combineReducers({ signup, flashMessages })
