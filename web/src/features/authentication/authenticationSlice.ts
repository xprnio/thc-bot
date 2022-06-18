import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAuthentication } from './authenticationAPI';

interface AuthenticationState {
    username?: string
    email?: string
    isAuthenticated: boolean
    status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthenticationState = {
    isAuthenticated: false,
    status: 'idle'
}

export const getAuthentication = createAsyncThunk(
    'authentication/getAuthentication',
    async() => {
        const response = await fetchAuthentication();
        return response.data
    }
)

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthentication.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        .addCase(getAuthentication.fulfilled, (state, action) => {
            return {
                ...state,
                ...action.payload,
                status: 'idle',
            }
        })
        .addCase(getAuthentication.rejected, (state) => {
            return {
                ...state,
                status: 'failed'
            }
        })
    }
})

export const selectIsAuthenticated = (state: RootState) => state.authentication.isAuthenticated
export const selectUsername = (state: RootState) => state.authentication.username
export const selectEmail = (state: RootState) => state.authentication.email

export default authenticationSlice.reducer;