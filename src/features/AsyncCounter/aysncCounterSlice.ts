import { createSlice } from "@reduxjs/toolkit";

export interface AsyncCounterState {
    value: number;
}

const initialState: AsyncCounterState = {
    value: 0
}

export const asyncCounterSlice = createSlice({
    name: 'asyncCounter',
    initialState,
    reducers: {
        
    }
})