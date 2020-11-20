import { combineReducers } from 'redux';
import counterReducer from './counter';
import userReducer from './user';
import popupUniversal from './popupUniversal';
import lot from './lot';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    popupUniversal,
    lot,
});

export default rootReducer;