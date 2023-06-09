
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import SeeClasses from "../Pages/Home/SeeClasses/SeeClasses";
import Classes from "../Pages/Classes/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'instructor',
          element: <Instructors></Instructors>
        },
        {
          path: 'see-classes',
          element: <SeeClasses></SeeClasses>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
        {
          path: 'secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
  ]);