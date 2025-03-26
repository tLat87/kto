import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import soundSettingsReducer from './slices/soundSettingsSlice';
import sessionReducer from './slices/sessionSlice';
import storeDataReducer from './slices/storeData';

const rootReducer = combineReducers({
  soundSettings: soundSettingsReducer,
  session: sessionReducer,
  storeData: storeDataReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
