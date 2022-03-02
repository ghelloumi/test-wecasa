import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import mainReducer from './main/mainReducer';

const enhancer =
  process.env.REACT_APP_ENV === 'local'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const reducers = combineReducers({
  mainReducer
});

const persistConfig = {
  key: 'root',
  storage
};

export default function configureStore(preloadedStore) {
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, preloadedStore, enhancer);
  persistStore(store);
  return store;
}
