import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        red: 0,
        green: 0,
        blue: 0
    },
    reducers: {
        setRed: (state, action) => {
            state.red = action.payload;
        },
        setGreen: (state, action) => {
            state.green = action.payload;
        },
        setBlue: (state, action) => {
            state.blue = action.payload;
        }
    }
})

export const { setRed, setGreen, setBlue } = colorsSlice.actions;