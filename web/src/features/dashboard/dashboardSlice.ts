import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchData } from './dashboardAPI';

export interface Profits {
    id: string,
    name: string,
    profit: number,
    margin: number,
}

export interface Assets {
    id: string,
    name: string,
    profit: number,
    value: number,
    margin: number,
}

export interface Strategy {
    id: string,
    name: string,
    profit: number,
    margin: number,
    value: number,
}

interface Dashboard {
    strategies?: Strategy[],
    assets?: Assets[]
    profits?: Profits[]
    state: 'loading' | 'idle' | 'failed'
}

const initialState: Dashboard = {
    state: 'idle'
}

export const getData = createAsyncThunk(
    'dashboard/getData',
    async (value: string) => {
        const response = await fetchData(value)
        return response
    }
)

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            return {
                ...state,
                [action.payload.value]: action.payload.data,
                status: 'idle'
            }
        })
        builder.addCase(getData.rejected, (state) => {
            return {
                ...state,
                status: 'failed'
            }
        })
    }
})

export const selectProfits = (state: RootState) => state.dashboard.profits
export const selectAssets = (state: RootState) => state.dashboard.assets
export const selectStrategies = (state: RootState) => state.dashboard.strategies

export default dashboardSlice.reducer;