import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Root/Home/Home";

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
                // // {
                //     path:"/userProfile",
                //     element:<Profile></Profile>,
                // // }
            ]
        }
    ]
 )
 export default router;