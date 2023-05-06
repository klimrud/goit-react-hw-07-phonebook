import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from './reducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

// const customMiddleware = store => {
//   return next => {
//     return action => {
//       if (typeof action === 'function'){ 
//         action(store.dispatch)
//         return 
//       }
//       console.log('action', action);
//       return next(action);
//     };
//   };
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //  middleware: [customMiddleware],
});

export const persistor = persistStore(store);
