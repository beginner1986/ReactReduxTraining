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
        incrementAsyncSuccess: (state) => {
            state.value += 1;
            state.loading = false;
        },
        decrementAsyncSuccess: (state) => {
            state.value -= 1;
            state.loading = false;
        },
        counterAsyncUpdateFailure: (state) => {
            state.loading = false;
        }
    }
});

export const { counterAsyncUpdate, incrementAsyncSuccess, decrementAsyncSuccess, counterAsyncUpdateFailure } = asyncCounterSlice.actions;