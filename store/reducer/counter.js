import * as actionTypes from '../actions/actionTypes';
const initialState = {
    count: 0,
}; //Initial state of the counter

const reducer = (state = initialState, action) => {
    
    if(action.type === actionTypes.COUNTER_INCRIMENT){
        const newState = {...state};
        newState.count += 1;
        return newState;
    }

    if(action.type === actionTypes.COUNTER_DECRIMENT){
        const newState = {...state};
        newState.count -= 1;
        return newState;
    }
    return state;
    
};

export default reducer;