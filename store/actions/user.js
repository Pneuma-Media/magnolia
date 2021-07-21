import * as actionTypes from './actionTypes';
import { addUser, authorizationUser, getUser, addStor } from '../../UTILS/api';
import { toast } from 'react-toastify';
import axios from 'axios';

const userAuthStart = () => ({ type: actionTypes.USER_AUTHORIZATION_START });
const userAuthSuccess = (user) => ({ type: actionTypes.USER_AUTHORIZATION_SUCCESS, user });
const userAuthFail = () => ({ type: actionTypes.USER_AUTHORIZATION_FAIL });

export const userLogOut = () => ({ type: actionTypes.USER_LOG_OUT });


export const userRegister = ({ name, email, password }) => {
    return async (dispatch) => {
        dispatch(userAuthStart());
        try {
            const res = await addUser({
                email,
                name,
                pass: password
            });
            if (res.status === 200) {
                localStorage.setItem('userToken', res.data.token);
                axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
                await addStor();
                toast('Вы успешно зарегестрировались');
                dispatch(userAuthSuccess(res.data));
            }
        } catch (e) {
            toast(e.response.data);
            dispatch(userAuthFail());
        }
    }
}

export const userAuthorization = (data) => {
    return async (dispatch) => {
        dispatch(userAuthStart());
        try {
            const res = await authorizationUser(data);
            if (res.status === 200) {
                localStorage.setItem('userToken', res.data.token);
                axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
                toast('Вы успешно авторизованны');
                dispatch(userAuthSuccess(res.data))
            }
        } catch (e) {
            toast(e.response ? e.response.data : 'Что-то пошло не так');
            dispatch(userAuthFail());
        }
    }
}

export const getUserData = () => {
    return async (dispatch) => {
        dispatch(userAuthStart());
        try {
            const res = await getUser();
            dispatch(userAuthSuccess(res.data))
        } catch (e) {
            dispatch(userAuthFail());
        }
    }
}


