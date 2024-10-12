import SectionTitle from "../../SectionTiltle/SectionTitle/SectionTitle";

const MenuCard = () => {
    return (
        <div data-aos="fade-up" className="">
            <SectionTitle  heading={"---Should Try---"} subHeading={"CHEF RECOMMENDS"}/>
           <div className="max-w-7xl px-20 mx-auto  grid  md:grid-cols-3 gap-10">
           <div>
            <div className=" bg-base-100  w-56 md:w-80   shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/hHPMJk1/slide5.jpg"
      alt="Shoes"  className=" w-56 md:w-80 h-64 image-zoom"/>
  </figure>
  <div className="card-body text-center">
    <h2 className="font-bold text-[14px] text-center">
    Caeser Salad
    </h2>
    <p className="text-[12px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="text-[10px] btn px-10 font-bold rounded-full w-36">Add To Cart</button>
    </div>
  </div>
</div>
            </div>
            <div>
            <div className=" bg-base-100  w-56 md:w-80   shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/hHPMJk1/slide5.jpg"
      alt="Shoes"  className=" w-56 md:w-80 h-64 image-zoom"/>
  </figure>
  <div className="card-body text-center">
    <h2 className="font-bold text-[14px] text-center">
    Caeser Salad
    </h2>
    <p className="text-[12px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="text-[10px] btn px-10 font-bold rounded-full w-36">Add To Cart</button>
    </div>
  </div>
</div>
            </div>
            <div>
            <div className=" bg-base-100  w-56 md:w-80   shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/hHPMJk1/slide5.jpg"
      alt="Shoes"  className=" w-56 md:w-80 h-64 image-zoom"/>
  </figure>
  <div className="card-body text-center">
    <h2 className="font-bold text-[14px] text-center">
    Caeser Salad
    </h2>
    <p className="text-[12px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="text-[10px] btn px-10 font-bold rounded-full w-36">Add To Cart</button>
    </div>
  </div>
</div>
            </div>
           </div>
        </div>
    );
};

export default MenuCard;