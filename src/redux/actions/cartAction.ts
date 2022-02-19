import { ActionTypes } from './actionTypes';

interface AddToCard {
    type: ActionTypes.ADD_TO_CART;
    payload: IProduct;
}

interface RemoveFromCart {
    type: ActionTypes.REMOVE_FROM_CART;
    payload: string;
}

interface ClearCart {
    type: ActionTypes.CLEAR_CART;
}

export type CartAction = AddToCard | RemoveFromCart | ClearCart;
