// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage

import rootReducer from './rootReducer'; // Combine your reducers

const persistConfig = {
  key: 'root', // The key to use for storing data
  storage, // The storage mechanism (local storage in this case)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
