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
            if(action.payload > 255) return;
            state.red = action.payload;
        },
        setGreen: (state, action) => {
            if(action.payload > 255) return;
            state.green = action.payload;
        },
        setBlue: (state, action) => {
            if(action.payload > 255) return;
            state.blue = action.payload;
        }
    }
})

export const { setRed, setGreen, setBlue } = colorsSlice.actions;