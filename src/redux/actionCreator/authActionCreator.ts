/* import { Dispatch } from 'react';
import AuthService from '../../services/AuthService';
import { ActionTypes } from '../actions/actionTypes';
import { AuthAction } from '../actions/authAction';

export const login = (payload: { email: string; password: string }) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionTypes.LOGIN_PENDING,
        });
        AuthService.Login(payload)
            .then((data) => {
                dispatch({
                    type: ActionTypes.LOGIN_SUCCESS,
                    payload: data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.LOGIN_ERROR,
                    payload: err,
                });
            });
    };
};

export const logout = (payload: string) => {
    return {
        type: ActionTypes.LOGOUT,
        payload,
    };
};
 */

const load = 'dsd';
export default load;
