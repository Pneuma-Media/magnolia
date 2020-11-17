import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isRegistrationLoading: false,
    isLoaded: false,
    userInfo: null

};

const reducer = (state = initialState, action) => {
    
    if(action.type === actionTypes.USER_AUTHORIZATION_START){
        const newState = {...state};
        newState.isRegistrationLoading = true;
        newState.isLoaded = false;
        return newState;
    }

    if(action.type === actionTypes.USER_AUTHORIZATION_FAIL){
        const newState = {...state};
        newState.isRegistrationLoading = false;
        newState.isLoaded = true;
        return newState;
    }

    if(action.type === actionTypes.USER_AUTHORIZATION_SUCCESS){
        const newState = {...state};
        newState.isRegistrationLoading = false;
        newState.userInfo = action.user;
        newState.isLoaded = true;
        return newState;
    }

    if(action.type === actionTypes.USER_LOG_OUT){
        const newState = {...state};
        newState.isRegistrationLoading = false;
        newState.userInfo = false;
        newState.isLoaded = null;
        return newState;
    }


    return state;
    
};

export default reducer;

