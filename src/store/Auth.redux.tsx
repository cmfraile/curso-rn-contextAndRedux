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