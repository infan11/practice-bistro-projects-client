import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";
import Footer from "../Componenets/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;