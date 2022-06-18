import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import conversationReducer from '../features/conversation/conversationSlice';

export const store = configureStore({
  reducer: {
    conversation: conversationReducer,
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
