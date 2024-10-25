import { MdDeleteOutline } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart ,refech] = useCart();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
   const tolalPrice = cart.reduce((total , item ) => total + item.price,  0 )
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
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount > 0){
                toast.success("Succesfully Deleted" )
            }
            else{
                toast.error("Try Again")
            }
            refech()
        })
        }
      });
   } 
    return (
        <div className="min-h-screen">  
               <div className=" justify-center items-center md:flex md:justify-evenly mt-9">
                <p className=" font-bold text-3xl text-orange-700">Item: {cart.length}</p>
                <p className="text-center  font-bold text-3xl text-orange-700">Total : {tolalPrice}</p>
               { cart.length ?  <Link to={"/dashboard/payment"}><button className="btn p-2 w-32 px-3 ml-28 font-bold text-white bg-orange-700">Payment</button></Link>:
            <Link to={"/dashboard/payment"}>   <button className="btn p-2 w-32 px-3 ml-28 font-bold text-white bg-orange-700">Payment</button></Link>
                
              }
               </div>
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
        <th></th>
      </tr>
    </thead>
    {cart.length > 0 ? (
    <tbody>
        {cart.map((item, index) => (
            <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={item.image}
                                    alt="Avatar Tailwind CSS Component"
                                />
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
                <th>
                    <button
                        onClick={() => handleDeleted(item._id)}
                        className="btn btn-ghost text-xl"
                    >
                        <MdDeleteOutline />
                    </button>
                </th>
            </tr>
        ))}
    </tbody>
) : (
    <div className="text-center mt-5">
        <p className="text-red-600  font-bold">Empty Your Cart</p>
    </div>
)}

  
    
  </table>
</div>
               </div>
        </div>
    );
};

export default Cart;