//npm install react-router-dom

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home,About,NotFound} from "./Pages";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<NotFound/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);

const AppRouter = () =>{
    return <RouterProvider router={router}/>
}

export default AppRouter;
