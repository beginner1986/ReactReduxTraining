import { createSlice } from "@reduxjs/toolkit";

interface ToDoItem {
    title: string;
    isDone: boolean;
}

interface ToDoList {
    todos: ToDoItem[];
}

const initialState: ToDoList = {
    todos: [
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