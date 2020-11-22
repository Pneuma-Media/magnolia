import { combineReducers } from 'redux';
import counterReducer from './counter';
import userReducer from './user';
import popupUniversal from './popupUniversal';
import lot from './lot';
import popup from './popup';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    popupUniversal,
    lot,
    popup,
});

export default rootReducer;