import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = []  , refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users" , {
                headers : {
                    authorization : `Bearer ${localStorage.getItem("access-token")}`
                }
            });
            return res.data
        }
    })

    // start  admin 
    const handleAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res => {
            // console.log(res.data);
            if(res.data.modifiedCount > 0){
                toast.success("Successfully Admin")
            }
           refetch();
        })
    }
    //  end Admin
    // start Deleted
    const handleDeleted = id  =>{
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
             axiosSecure.delete(`/users/${id}`)
             .then(res => {
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    toast.success("Succesfully Deleted")
                }
                refetch();
             })
            }
          });
    }
    // end deleted
    return (
        <div>
            <div className=" justify-center users-center md:flex md:justify-evenly mt-9">
                <p className=" font-bold text-3xl text-orange-700">users: {users.length}</p>
                <p className="text-center  font-bold text-3xl text-orange-700">Name : {users?.email}</p>
            </div>
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

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex users-center gap-3">
                                                <div className="avatar">
                                                    <p className="font-bold">{user.name} </p>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {user.email}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{user._id}</span>
                                        </td>
                                        <td className="text-2"> {
                                        user.role === "admin"  ? "Admin" : <button onClick={() => handleAdmin(user._id)} className="btn btn-ghost  font-bold text-xl"><MdAdminPanelSettings/> </button>}</td>
                                        <th>
                                            <button onClick={() => handleDeleted(user._id)} className="btn btn-ghost  text-xl"><MdDeleteOutline /> </button>
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

export default AllUsers;