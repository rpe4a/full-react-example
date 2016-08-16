import { combineReducers } from 'redux'
/*import signup from './signup';*/
import signin from './signin';
import flashMessages from './flashMessages';

export default combineReducers({ /*signup,*/ flashMessages, signin })
