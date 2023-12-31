import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import InsBio from "../Pages/Instructors/InsBio/InsBio";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";
import AdminRoutes from "./AdminRoutes";
import ManageStudent from "../Pages/Dashboard/ManageStudents/ManageStudent";
import Payment from "../Pages/Dashboard/Payment/PAyment";
import NotFound from "../Pages/NotFound/NotFound";

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
        path: 'item1',
        element: <InsBio></InsBio>
      },
      {
        path: 'class',
        element: <Classes></Classes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      },
      {
        path:'notFound',
        element:<NotFound></NotFound>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allusers',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'addCourse',
        element: <AdminRoutes><AddCourse></AddCourse></AdminRoutes>
      },
      {
        path:'manageUsers',
        element:<AdminRoutes><ManageStudent></ManageStudent></AdminRoutes>
      }
    ]
  }
]);