import {combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

export const rootReducers=combineReducers({
    auth: authReducer,
    ui:uiReducer
   
})