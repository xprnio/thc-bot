import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchConverstation } from "./converstationAPI";

interface ConverstationState {
    key?: string,
    type?: 'information' | 'prompt' | 'options'
    content?: string[]
    pattern?: string
    options?: ConverstationOption[]
    username?: string
    status: 'idle' | 'loading' | 'failed';
}

interface ConverstationOption {
    key: string;
    label: string;
}

const initialState: ConverstationState = {
    status: 'idle'
}

export interface Payload {
    value: string
}

export interface FetchConverstation {
    username: string,
    type: 'POST' | 'GET'
    payload?: Payload
}

export const getConverstation = createAsyncThunk(
    'converstation/getConverstation',
    async({username, type, payload}: FetchConverstation) => {
        const response = await fetchConverstation({username, type, payload})
        return response.data
    }
)

export const converstationSlice = createSlice({
    name: 'converstation',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getConverstation.pending, (state) => {
        state.status = 'loading';
      })
        builder.addCase(getConverstation.fulfilled, (state, action) => {
            state.status = 'idle'
            const data = action.payload
            state = {
                ...state,
                ...data
            }
        })
        builder.addCase(getConverstation.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const selectContent = (state: RootState) => state.converstation.content

export default converstationSlice.reducer