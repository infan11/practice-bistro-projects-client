import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/UseAuth";
import image  from '../../assets/logo.png'

const PrivateRoutes = ({children}) => {
const {user, loading} = useAuth();
const location = useLocation();
 if(loading){
      return  <img src={image} alt="" />
 } 
    if(!user) {
        return <Navigate to="/login" state={{from :location}} replace/>
    }
    return children
};

export default PrivateRoutes;