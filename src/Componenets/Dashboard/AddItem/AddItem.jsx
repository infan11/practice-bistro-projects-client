import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { imageUpload } from "../../Hooks/useImage";
import SectionTitle from "../../SectionTiltle/SectionTitle/SectionTitle";


const AddItem = () => {
   const axiosSecure = useAxiosSecure();
    const handleAddItems = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const recipe = form.recipe.value;
        const image = form.image.files[0]
        const imageData = await imageUpload(image)
        console.log(imageData);
        console.log(name, category, price, image);
        const menuItem = {
             name,
             category,
             price,
             recipe,
             image :imageData?.data?.display_url
        }
        axiosSecure.post("/menu" , menuItem)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                toast.success("Successfully Add Item")
            }
        })
    }

    return (
        <div>
            <SectionTitle heading={"---what's new?---"} subHeading={"ADD AN ITEM"} />
            <div>
                <div className=" w-full ">
                    <form onSubmit={handleAddItems} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recipe Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type here" className="border-2 p-2 w-full px-4 rounded-md" required />
                        </div>
                        <div className="flex justify-evenly   gap-3 mb-3">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Category</span>
                                </label>
                                <select className="select select-bordered  p-2 w-full px-4 " name="category">
                                    <option disabled selected>Select Recipe</option>
                                    <option>salad</option>
                                    <option>drinks</option>
                                    <option>soups</option>
                                    <option>dessert</option>
                                    <option>pizza</option>

                                </select>
                            </div>
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text  font-bold">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Type here" className="border-2 p-2 w-full px-4 rounded-md" required />
                            </div>

                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" name="recipe"></textarea>
                        <input type="file" name="image" accept="image/*" className="file-input file-input-ghost w-full text-orange-500 font-bold max-w-xs" />
                        <div className="form-control mt-6">
                            <button className="btn  bg-orange-500 font-bold text-white">ADD ITEM</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddItem;