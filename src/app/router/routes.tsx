import { createBrowserRouter } from "react-router-dom";
import Counter from "../../features/counter/Counter";
import App from "../layout/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Counter /> }
        ]
    }
])