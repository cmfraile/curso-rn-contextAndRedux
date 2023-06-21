import { useDispatch , TypedUseSelectorHook , useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";

const store = configureStore({
  reducer:{
    'auth':authSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store , useAppDispatch , useAppSelector }

/*
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch , TypedUseSelectorHook , useSelector } from 'react-redux';
import { reHydrateStore , localStorageMiddleware } from './thunks/storage.thunks';

const store = configureStore({
  reducer: {
    'auth':menuSlice.reducer,
  },
  //preloadedState:reHydrateStore(),
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store , useAppDispatch , useAppSelector }
*/