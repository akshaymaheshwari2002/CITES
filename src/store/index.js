import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  createTransform,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    immutableCheck: false,
  }),
  logger,
];
const transform = createTransform(
  (inboundState) => inboundState,
  (outboundState) => outboundState,
  {whitelist: ['persistedReducer']},
);
const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
  whitelist: ['persistedReducer'],
  transforms: [transform],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
const persistor = persistStore(store);

export {store, persistor};
