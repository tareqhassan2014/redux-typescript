export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
}

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

export type Action = AddToCard | RemoveFromCart | ClearCart;
