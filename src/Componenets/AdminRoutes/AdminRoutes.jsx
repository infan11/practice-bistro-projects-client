import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/UseAuth";
import image  from '../../assets/logo.png'
import { Hourglass } from "react-loader-spinner";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({children}) => {
const {user, loading} = useAuth();
const [isAdmin , isAdminLoading] = useAdmin();
const location = useLocation();
 if(loading || isAdminLoading){
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
    if(!user && isAdmin ) {
      return <Navigate to="/login" state={{from :location}} replace/>

    }
    return children
}

export default AdminRoutes;