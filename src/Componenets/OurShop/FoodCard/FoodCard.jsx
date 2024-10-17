

const FoodCard = ({item}) => {
    const {name , recipe , image, category , price} = item;
    return (
        <div>
              <div>
            <div className="   w-60 md:w-80   shadow-xl">
  <figure>
    <img
      src={image}
      alt="unavilable this food "  className=" w-60 md:w-80 h-64 "/>
      <p className="bg-black text-white font-bold w-14 p-1 rounded mx-auto relative -top-[250px] mr-12 ">
        ${price}</p>
  </figure>
  <div className="card-body text-center">
    <h2 className="font-bold text-[14px] text-center">
    {name}
    </h2>
  
    <p className="text-[8px]">{recipe}</p>
    <div className="card-actions justify-center">
      <button className="text-[10px] btn px-10 font-bold rounded-full w-36">Add To Cart</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default FoodCard;