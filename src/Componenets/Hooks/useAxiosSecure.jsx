import axios from "axios";
import useAuth from "./UseAuth/UseAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure  = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate()
    // request interceptors to add authorization header for every secure call to the api
 axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token")
        // console.log("request stopped by interceptors" , token);
        config.headers.authorization = `Bearar ${token}`
        return config
    } , function (error) {
        // Do something with request error
        return Promise.reject(error);
      })
      //  reaponse interceptors
      axiosSecure.interceptors.response.use(
        function (response) {
          return response; // handle success
        },
        async (error) => {
          const status = error?.response?.status;
          console.log("status error in the interceptors", status);
      
          if (status === 401 || status === 403) {
            await logOut(); // handle unauthorized/forbidden errors
            navigate("/login");
          }
      
          return Promise.reject(error); // always reject error
        }
      );
      
      return axiosSecure
};

export default useAxiosSecure;