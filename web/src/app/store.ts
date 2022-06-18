import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import converstationReducer from '../features/converstation/converstationSlice';

export const store = configureStore({
  reducer: {
    converstation: converstationReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
