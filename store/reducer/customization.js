import * as actionTypes from '../actions/actionTypes';

const initialState = {
    customization: []
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.CUSTOMIZATION) {
        const newState = { ...state };
        newState.customization = action.payload;
        return newState;
    }
    return state;

};

export default reducer;