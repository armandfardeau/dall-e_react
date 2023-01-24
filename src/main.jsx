import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Image from './Components/image_generator/Image.jsx'
import Text from './Components/text_generator/Text.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "image-generator",
                element: <Image />
            },
            {
                path: "text-generator",
                element: <Text />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
