import { AUTH } from "../constants/actionTypes";
import * as api from '../API/index';

export const signin = (loginData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(loginData);

        dispatch({ type: AUTH, data });

        navigate('/');
    } catch (error) {
        console.log(error);
    }
};
export const userCreate = (createUser) => async (dispatch) => {
    try {
        const { data } = await api.userCreate(createUser);

        dispatch({ type: AUTH, data });

    } catch (error) {
        console.log(error);
    }
};