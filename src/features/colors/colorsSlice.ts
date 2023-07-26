import { createSlice } from "@reduxjs/toolkit";

const validateInput = (input: string) : number | undefined => {
    if(input.length === 0)
        return 0;
    if(!Number.parseInt(input) || Number.parseInt(input) < 0 || Number.parseInt(input) > 255) 
        return undefined;
    
        return Number.parseInt(input);
}

export const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        red: 0,
        green: 0,
        blue: 0
    },
    reducers: {
        setRed: (state, action) => {
            var input = validateInput(action.payload);
            if(!input) return;
            state.red = input;
        },
        setGreen: (state, action) => {
            var input = validateInput(action.payload);
            if(!input) return;
            state.green = input;
        },
        setBlue: (state, action) => {
            var input = validateInput(action.payload);
            if(!input) return;
            state.blue = input;
        }
    }
})

export const { setRed, setGreen, setBlue } = colorsSlice.actions;