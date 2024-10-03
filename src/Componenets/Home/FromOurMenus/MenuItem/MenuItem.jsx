
const MenuItem = ({item}) => {
    const {image , price ,name,recipe} = item;

    return (
        <div>
            <div>
                <div className="flex gap-4 ">
                    <img src={image} style={{borderRadius :" 0px 200px 200px 200px " }} className="image-zoom w-[80px]" alt="" />
                  <div>
                  <p className="text-xl font-bold">{name}</p> 
                      <p>{recipe}</p>
                  </div>
                  <p className="text-yellow-400"> {price}</p>       
                </div>
                
                </div>
                <div>
                    </div>     
                       
        </div>
    );
};

export default MenuItem;