import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import conversationReducer from '../features/conversation/conversationSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import strategiesReducer from '../features/strategies/strategiesSlice';

export const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    dashboard: dashboardReducer,
    strategies: strategiesReducer,
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
