import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';

export default combineReducers({ global: appReducer, login: loginReducer });
