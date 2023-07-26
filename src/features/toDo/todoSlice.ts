import { createSlice } from "@reduxjs/toolkit";

interface ToDoItem {
    title: string;
    isDone: boolean;
}

interface ToDoList {
    items: ToDoItem[];
}

const initialState: ToDoList = {
    items: [
        { title: 'Task one', isDone: true },
        { title: 'Task two', isDone: false }
    ]
};

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        
    }
})