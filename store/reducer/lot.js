import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lotData:null,
    planData:null,
};

const reducer = (state = initialState, action) => { 
    if(action.type === actionTypes.SET_LOT){
        const newState = {...state};
        newState.lotData = action.payload;
        return newState;
    }

    if(action.type === actionTypes.SET_PLAN){
        const newState = {...state};
        newState.planData = action.payload;
        return newState;
    }
    return state;
    
};

export default reducer;
