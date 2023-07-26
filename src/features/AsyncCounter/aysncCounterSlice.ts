import { createSlice } from "@reduxjs/toolkit";

interface AsyncCounterState {
    value: number;
    loading: boolean;
}

const initialState: AsyncCounterState = {
    value: 0,
    loading: false
}

export const asyncCounterSlice = createSlice({
    name: 'asyncCounter',
    initialState,
    reducers: {
        counterAsyncUpdate: (state) => {
            state.loading = true;
        },
        incrementAsync: (state, action) => {
            state.value += action.payload;
            state.loading = false;
        },
        decrementAsync: (state, action) => {
            state.value -= action.payload;
            state.loading = false;
        }
    }
});

export const { counterAsyncUpdate, incrementAsync, decrementAsync } = asyncCounterSlice.actions;