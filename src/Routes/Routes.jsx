import { createBrowserRouter } from "react-router";

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
                    path:"/userProfile",
                    element:<Profile></Profile>,
                }
            ]
        }
    ]
 )

// const Routes = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Routes;