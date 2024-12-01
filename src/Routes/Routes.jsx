import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Root/Home/Home";
import About from "../Root/Home/AboutSection/About/About";
import SignUp from "../Authentiction/SignUp/SignUp";

 const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Root></Root>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/register",
                    element: <SignUp></SignUp>
                }
                // // {
                //     path:"/userProfile",
                //     element:<Profile></Profile>,
                // // }
            ]
        }
    ]
 )
 export default router;