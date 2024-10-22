import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/UseAuth";
import image  from '../../assets/logo.png'
import { Hourglass } from "react-loader-spinner";

const PrivateRoutes = ({children}) => {
const {user, loading} = useAuth();
const location = useLocation();
 if(loading){
      return  <div className="flex justify-center items-center min-h-screen">
        <Hourglass
      
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={"#FDBA74"}
  />

      </div>
 } 
    if(!user) {
      return <Navigate to="/login" state={{from :location}} replace/>

    }
    return children
}

export default PrivateRoutes;