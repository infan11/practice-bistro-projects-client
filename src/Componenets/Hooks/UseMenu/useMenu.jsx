import { useEffect, useState } from "react";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";


const useMenu = () => {
           
    const [menu , setMenu] = useState([]);
    const [loading , setLoading] = useState(true);
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
    axiosSecure.get("/menu")
    .then(res => {
        setMenu(res.data);
        setLoading(false)
    })}, [])

    // const {data : menu , isPending : loading , refetch} = useQuery({
    //     queryKey : ['menu'],
    //     queryFn : async () => {
    //         const res = await axiosPublic.get("/menu")
    //         console.log(res.data);
    //         return res.data
    //     }
    // }) 

    return  [menu , loading ]
};

export default useMenu;