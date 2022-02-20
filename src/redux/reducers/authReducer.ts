/* import { ActionTypes } from '../actions/actionTypes';
import { AuthAction } from '../actions/authAction';

interface IAuthState {
    data: IAuthData | null;
    status: 'idle' | 'pending' | ' success' | 'error';
    error: null | string;
}

const initialState: IAuthState = {
    data: null,
    status: 'idle',
    error: null,
};

const authReducer = (
    state: IAuthState = initialState,
    action: AuthAction
): IAuthData | null => {
    switch (action.type) {
        case ActionTypes.LOGIN_PENDING: {
            return {
                data: null,
                status: 'pending',
                error: null,
            };
        }
        case ActionTypes.LOGIN_SUCCESS: {
            return {
                data: action.payload,
                status: 'success',
                error: null,
            };
        }
        case ActionTypes.LOGIN_ERROR: {
            return {
                data: action.payload,
                status: 'error',
                error: null,
            };
        }

        default: {
            return state;
        }
    }
};

export default authReducer;
 */
const load = 'dsd';
export default load;
