

const FoodCard = ({item}) => {
    const {name , recipe , image, category , price} = item;
    return (
        <div>
              <div>
            <div className=" bg-base-100  w-60 md:w-80   shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes"  className=" w-60 md:w-80 h-64 "/>
  </figure>
  <div className="card-body text-center">
    <h2 className="font-bold text-[14px] text-center">
    {name}
    </h2>
    <h2 className="font-bold text-[10px] text-center">
    {category}
    </h2>
    <p className="text-[12px]">{recipe}</p>
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