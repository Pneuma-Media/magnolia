import { combineReducers } from 'redux';
import counterReducer from './counter';
import userReducer from './user';
import popupUniversal from './popupUniversal';
import lot from './lot';
import popup from './popup';
import customization from './customization';
import floorplan from './floorplan';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    popupUniversal,
    lot,
    popup,
    customization,
    floorplan
});

export default rootReducer;