import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(middleware)
);

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
