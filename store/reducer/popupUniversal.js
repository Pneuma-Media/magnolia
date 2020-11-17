import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name:null,
    data:null,
    isOpen:false,
}

const reducer = (state = initialState, action) => { 
    if(action.type === actionTypes.POPUP_UNIVERSAL_SWITCH){
        const newState = {...state};
        newState.name = action.payload.name;
        newState.data = action.payload.data;
        newState.isOpen = action.payload.isOpen;
        return newState;
    }
    return state;
    
};

export default reducer;