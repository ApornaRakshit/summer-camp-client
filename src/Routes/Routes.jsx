
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import SeeClasses from "../Pages/Home/SeeClasses/SeeClasses";
import Classes from "../Pages/Classes/Classes/Classes";

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
        }
      ]
    },
  ]);