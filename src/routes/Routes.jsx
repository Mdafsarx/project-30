import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Home from "../pages/Home/Home";
import AppliedJobs from "../pages/appliedJobs/AppliedJobs";
import Login from "../pages/Login/Login";
import SingUp from "../pages/Singup/SingUp";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'/AppliedJobs',
          element:<AppliedJobs/>
        },
        {
          path:"/Login",
          element:<Login/>
        },
        {
          path:"/SingUp",
          element:<SingUp/>
        },
        {
          path:"/Blog",
          element:<Blog/>
        }
      ]
    },
  ]);

  export default router