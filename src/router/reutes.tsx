import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Counter from "../features/Counter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Counter /> }
        ]
    }
])