import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import cartReducer from './../reducers/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
