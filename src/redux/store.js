import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {IS_PRODUCTION} from '../contant';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = IS_PRODUCTION
  ? createStore(persistedReducer, applyMiddleware(thunk))
  : createStore(persistedReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
