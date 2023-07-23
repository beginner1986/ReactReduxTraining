import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../counter/counterSlice";

const initialState: CounterState = {
    value: 0
}

export const asyncCounterSlice = createSlice({
    name: 'asyncCounter',
    initialState,
    reducers: {
        
    }
})