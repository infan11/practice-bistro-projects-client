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
import PrivateRoutes from "../Componenets/PrivateRoutes/PrivateRoutes";
import Cart from "../Componenets/Dashboard/Cart/Cart";
import AdminHome from "../Componenets/Dashboard/AdminHome/AdminHome";
import AddItem from "../Componenets/Dashboard/AddItem/AddItem";
import AllUsers from "../Componenets/Dashboard/AllUsers/AllUsers";
import History from "../Componenets/Dashboard/History/History";
import MenageBokings from "../Componenets/Dashboard/MenageBokings/MenageBokings";
import MenageItems from "../Componenets/Dashboard/MenageItems/MenageItems";
import UpdateItems from "../Componenets/Dashboard/MenageItems/UpdateItems/UpdateItems";
import Payment from "../Componenets/Dashboard/Payment/Payment/Payment";

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
        element:<PrivateRoutes><OurMenu /></PrivateRoutes>
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
    element: <Dashboard />,
    children : [
      {
        path : "/dashboard/cart",
        element : <Cart/>
      },
      {
        path : "/dashboard/payment",
        element : <Payment/>
      },

      {
        path : "/dashboard/adminHome",
        element : <AdminHome/>
      },
      {
        path : "/dashboard/addItem",
        element : <AddItem/>
      },
     
      {
        path : "/dashboard/bookings",
        element : <MenageBokings/>
      },
      {
        path : "/dashboard/users",
        element : <AllUsers/>
      },
       {
        path : "/dashboard/history",
        element : <History/>
       },
       {
        path : "/dashboard/menageItems",
        element : <MenageItems/>
       },
       {
        path : "/dashboard/update/:id",
        element : <UpdateItems></UpdateItems>, 
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
       },
    ]
  }
]);
