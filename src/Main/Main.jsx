import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";
import Footer from "../Componenets/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter =  location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div>
           {noHeaderFooter || <Navbar/>}
            <Outlet/>
        {noHeaderFooter  ||    <Footer/>}
        </div>
    );
};

export default Main;