import { ActionTypes } from './actionTypes';

interface loginSuccessAction {
    type: ActionTypes.LOGIN_SUCCESS;
    payload: IAuthData;
}
interface loginPendingAction {
    type: ActionTypes.LOGIN_PENDING;
}
interface loginErrorAction {
    type: ActionTypes.LOGIN_ERROR;
    payload: string;
}

interface logoutAction {
    type: ActionTypes.LOGOUT;
}

export type AuthAction =
    | loginSuccessAction
    | loginPendingAction
    | loginErrorAction
    | logoutAction;
