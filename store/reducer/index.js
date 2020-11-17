import { combineReducers } from 'redux';
import counterReducer from './counter';
import userReducer from './user';
import popupUniversal from './popupUniversal';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    popupUniversal,
});

export default rootReducer;