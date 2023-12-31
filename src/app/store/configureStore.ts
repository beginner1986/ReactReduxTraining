import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../features/counter/counterSlice";
import { colorsSlice } from "../../features/colors/colorsSlice";
import { asyncCounterSlice } from "../../features/asyncCounter/aysncCounterSlice";
import { todoSlice } from "../../features/toDo/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        colors: colorsSlice.reducer,
        acyncCounter: asyncCounterSlice.reducer,
        todo: todoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;