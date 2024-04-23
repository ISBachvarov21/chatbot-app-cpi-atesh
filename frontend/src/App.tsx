import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./routes/Home"
import Chat from "./routes/Chat"

function App() {
    const BrowserRouter = createBrowserRouter([
        { path: '/', element: <Home /> },
        { path: '/chat', element: <Chat /> }
    ])

    return (
        <RouterProvider router={BrowserRouter}/>
    )
}

export default App
