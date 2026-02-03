import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import Users from "./pages/users/Users.jsx";
import User from "./pages/user/User.jsx";
import Create from "./pages/user/Create.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "user/create",
                element: <Create />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "users/:id",
                element: <User />
            }
        ]
    }
]);
export default router;