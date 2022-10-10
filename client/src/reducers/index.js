import {combineReducers} from 'redux';
import authReducer from './auth';
import currentuserreducer from './currentuser';

export default combineReducers({authReducer, currentuserreducer});