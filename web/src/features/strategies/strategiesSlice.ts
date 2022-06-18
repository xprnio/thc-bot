import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchStrategyPreviews } from './strategiesAPI';

interface Strategy {
    id: string,
    name: string,
    profit: number,
    margin: number,
    user_rating: number,
    short_desc: number,
    risk: string,
}

export interface Strategies {
    previews?: Strategy[],
    status: 'idle' | 'loading' | 'failed',
}

const initialState: Strategies = {
    status: 'idle'
}

const getStrategyPreviews = createAsyncThunk(
    'strategies/getStrategyPreviews',
    async () => {
        const response = await fetchStrategyPreviews()
        return response.data
    }
)

export const strategiesSlice = createSlice({
    name: 'strategies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStrategyPreviews.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        builder.addCase(getStrategyPreviews.fulfilled, (state, action) => {
            return {
                ...state,
                status: 'idle',
                previews: action.payload,
            }
        })
        builder.addCase(getStrategyPreviews.rejected, (state) => {
            return {
                ...state,
                status: 'failed'
            }
        })
    }
})

export const selectStrategyPreviews = (state: RootState) => state.strategies.previews

export default strategiesSlice.reducer;