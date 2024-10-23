import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMenu from "../../Hooks/UseMenu/useMenu";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const { _id, name, recipe, image, category, price } = item;
  const handleAddToCart = food => {
    console.log("food item", food);
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price
      }
      axiosSecure.post("/carts", cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Successfull Added")
            refetch()
          }
        })
    }
    else{
      Swal.fire({
        title: "You are not logged yet!",
        text: "Please login now then try",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, SignIn"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      });
      
    }
  }
  return (
    <div>
      <div>
        <div className="   w-60 md:w-80   shadow-xl">
          <figure>
            <img
              src={image}
              alt="unavilable this food " className=" w-60 md:w-80 h-64 " />
            <p className="bg-black text-white font-bold w-14 p-1 rounded mx-auto relative -top-[250px] mr-12 ">
              ${price}</p>
          </figure>
          <div className="card-body text-center">
            <h2 className="font-bold text-[14px] text-center">
              {name}
            </h2>

            <p className="text-[8px]">{recipe}</p>
            <div className="card-actions justify-center">
              <button onClick={() => handleAddToCart(item)} className="text-[10px] btn px-10 font-bold rounded-full w-36">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;