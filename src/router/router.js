import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import NotFoundPage from "../pages/404/404";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: "*",
        element:<NotFoundPage/>
    }
])

export default routers