import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAssets, fetchProfits } from './dashboardAPI';

export interface Profits {
    id: string,
    name: string,
    profit: number,
    change: number,
}

export interface Assets {
    id: string,
    name: string,
    profit: number,
    value: number,
    change: number,
}

interface Dashboard {
    assets?: Assets[]
    profits?: Profits[]
    state: 'loading' | 'idle' | 'failed'
}

const initialState: Dashboard = {
    state: 'idle'
}

export const getProfits = createAsyncThunk(
    'dashboard/getProfits',
    async () => {
        const response = await fetchProfits()
        return response.data
    }
)

export const getAssets = createAsyncThunk(
    'dashboard/getAsssets',
    async () => {
        const response = await fetchAssets()
        return response.data
    }
)

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfits.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        builder.addCase(getProfits.fulfilled, (state, action) => {
            return {
                ...state,
                profits: action.payload,
                status: 'idle'
            }
        })
        builder.addCase(getProfits.rejected, (state) => {
            return {
                ...state,
                status: 'failed'
            }
        })
        builder.addCase(getAssets.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        builder.addCase(getAssets.fulfilled, (state, action) => {
            return {
                ...state,
                assets: action.payload,
                status: 'idle'
            }
        })
        builder.addCase(getAssets.rejected, (state) => {
            return {
                ...state,
                status: 'failed'
            }
        })
        
    }
})

export const selectProfits = (state: RootState) => state.dashboard.profits
export const selectAssets = (state: RootState) => state.dashboard.assets

export default dashboardSlice.reducer;