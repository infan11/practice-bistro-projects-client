import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Componenets/Home/Home/Home";
import Login from "../Componenets/Verify/Login/Login/Login";
import Register from "../Componenets/Verify/Register/Register/Register";
import OurMenu from "../Componenets/OurMenu/OurMenu/OurMenu";
import OurShop from "../Componenets/OurShop/OurShop/OurShop";
import Dashboard from "../Componenets/Dashboard/Dashboard/Dashboard";
import ContactUs from "../Componenets/ContactUs/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/ourMenu",
        element: <OurMenu />
      },
      {
        path: "/ourShop",
        element: <OurShop />
      },
      {
        path: "/contactUs",
        element: <ContactUs/>
      }
    ]

  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);
