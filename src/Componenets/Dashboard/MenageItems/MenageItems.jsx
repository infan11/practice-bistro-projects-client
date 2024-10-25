import React from 'react';
import SectionTitle from '../../SectionTiltle/SectionTitle/SectionTitle';
import useMenu from '../../Hooks/UseMenu/useMenu';
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from "react-icons/rx";
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const MenageItems = () => {
    const [menu , ,refetch] = useMenu();
    
    const axiosSecure = useAxiosSecure()
    const handleDeleted  = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/menu/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    toast.success("Succesfully Deleted" )
                    
                }
               refetch();
               
            })
            }
          });
       } 
    return (
        <div>
             <SectionTitle heading={"---Hurry Up!---"} subHeading={"MENAGE ALL ITEMS"}/>
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
        
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Deleted</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
               {
                menu?.map((item , index) =>  <tr key={item._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                       {item.name}
                      <br />
                      <span className="badge badge-ghost badge-sm">{item._id}</span>
                    </td>
                    <td>{item.price}</td>
                    <Link to={`/dashboard/update/${item._id}`}> <td className='btn mt-3 font-bold text-2xl text-white bg-orange-500 '><RxUpdate/></td></Link>
                    <th>
                      <button onClick={() => handleDeleted(item._id)} className="btn  font-bold text-2xl text-white bg-orange-500"><MdDeleteOutline /> </button>
                    </th>
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

export default MenageItems;