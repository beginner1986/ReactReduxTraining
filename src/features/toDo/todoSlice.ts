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
        toggleIsDone: (state, action) => {
            var index = state.todos.findIndex(todo => todo.title === action.payload);
            var todo = state.todos.at(index);
            if(!todo) return
            todo.isDone = !todo.isDone;
        },
        addToDoItem: (state, action) => {
            const toDoItem: ToDoItem = { title: action.payload, isDone: false };
            state.todos = [...state.todos, toDoItem];
        }
    }
})

export const { toggleIsDone, addToDoItem } = todoSlice.actions;