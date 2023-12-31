import { createBrowserRouter } from "react-router-dom";
import Counter from "../../features/counter/Counter";
import App from "../layout/App";
import Colors from "../../features/colors/Colors";
import AsyncCounter from "../../features/asyncCounter/AsyncCounter";
import ToDo from "../../features/toDo/ToDo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Counter /> },
            { path: 'colors', element: <Colors /> },
            { path: 'asyncCounter', element: <AsyncCounter /> },
            { path: 'toDo', element: <ToDo /> }
        ]
    }
])