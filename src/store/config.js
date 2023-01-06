import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit';
  import { useDispatch, useSelector } from 'react-redux';
  import { persistReducer } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import persistStore from 'redux-persist/lib/persistStore';
import itemSlice from './slices/itemSlice';
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['item'],
  };
  export const rootReducer = combineReducers({
    item: itemSlice.reducer,
  });
  
  const perReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: perReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  
  export const persistor = persistStore(store);
  
  export const AppDispatch = typeof store.dispatch;
  
  export const useAppSelector = useSelector;
  export const useAppDispatch = () => useDispatch();
   
  export default store;
  