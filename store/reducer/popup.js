import * as actionTypes from '../actions/actionTypes';

const initialState = {
    popup:false,
};

const reducer = (state = initialState, action) => { 
    if(action.type === actionTypes.IS_POPUP){
        const newState = {...state};
        newState.popup = action.payload;
        return newState;
    }

    return state;
    
};

export default reducer;