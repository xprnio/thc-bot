import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchConversation } from './conversationAPI';

interface ConversationState {
  key?: string,
  type?: 'information' | 'prompt' | 'options'
  content?: string[]
  pattern?: string
  options?: ConversationOption[]
  username?: string
  status: 'idle' | 'loading' | 'failed';
}

interface ConversationOption {
  key: string;
  label: string;
}

const initialState: ConversationState = {
  status: 'idle',
};

export interface Payload {
  value: string;
}

export interface FetchConversation {
  username: string,
  type: 'POST' | 'GET'
  payload?: Payload
}

export const getConversation = createAsyncThunk(
  'conversation/getConversation',
  async ({ username, type, payload }: FetchConversation) => {
    const response = await fetchConversation({ username, type, payload });
    return response.data;
  },
);

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConversation.pending, (state) => {
      return {
        ...state,
        status: 'loading',
      }
    });
    builder.addCase(getConversation.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
        status: 'idle',
      };
    });
    builder.addCase(getConversation.rejected, (state) => {
      return {
        ...state,
        status: 'failed',
      }
    });
  },
});

export const selectContent = (state: RootState) => state.conversation.content;

export default conversationSlice.reducer;