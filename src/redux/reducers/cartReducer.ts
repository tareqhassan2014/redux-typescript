import { ActionTypes } from '../actions/actionTypes';
import { cartActionType } from '../actions/cartAction';

const cartReducer = (state: IProduct[] = [], action: cartActionType) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART: {
            return [...state, action.payload];
        }

        case ActionTypes.REMOVE_FROM_CART: {
            return state.filter((produce) => produce._id !== action.payload);
        }

        case ActionTypes.CLEAR_CART: {
            return [];
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;
