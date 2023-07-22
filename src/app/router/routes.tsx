import { createBrowserRouter } from "react-router-dom";
import Counter from "../../features/counter/Counter";
import App from "../layout/App";
import Colors from "../../features/colors/Colors";
import AsyncCounter from "../../features/AsyncCounter/AsyncCounter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Counter /> },
            { path: 'colors', element: <Colors /> },
            { path: 'asyncCounter', element: <AsyncCounter /> }
        ]
    }
])