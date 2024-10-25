import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../SectionTiltle/SectionTitle/SectionTitle";
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";

const History = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : payments = [] } = useQuery({
        queryKey: ['payments' , user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle heading={"---At a Glancel---"} subHeading={"PAYMENT HISTORY"}></SectionTitle>
            <div>
             <div className="mt-3">
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Serial
        </th>
        
        <th className="uppercase">Price</th>
        <th className="uppercase">Transaction ID</th>
        <th>STATUS</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
               {
                payments?.map((item , index) =>  <tr key={item._id}>
                    <th>
                      {index + 1}
                    </th>
                   
                      
                      <td>{item.price}</td>
                        
                     
                  
                
                    <td>
                       {item.transactionId}
                      <br />
                      <span className="badge badge-ghost badge-sm">{item._id}</span>
                    </td>
                    <td>{item.status}</td>
                  
                   
                  </tr>)
               }
   
    
     
      
    </tbody>
  
    
  </table>
</div>
               </div>
             </div>

        </div>
    );
};

export default History;