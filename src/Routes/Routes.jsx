import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";

import Bookings from "../Pages/Bookings/Bookings";

import BookService from "../Pages/Home/BookService/BookService";
import PrivateRoutes from "./PrivateRoutes";
import Service from "../Pages/Home/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <BookService />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-rosy-seven.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
