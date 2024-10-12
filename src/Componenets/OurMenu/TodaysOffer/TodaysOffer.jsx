import { useState } from "react";
import SectionTitle from "../../SectionTiltle/SectionTitle/SectionTitle";
import { useEffect } from "react";
import ButtonShare from "../../Section/ButtonShare/ButtonShare";

const TodaysOffer = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
              fetch("/menu.json")
              .then(res => res.json())
              .then(data =>{
                const popularMenu = data.filter(item => item.category === "popular")
                setMenu(popularMenu)
              })
    }, [])
    return (
        <div>
            <SectionTitle heading={"---Don't miss---"} subHeading={"TODAY'S OFFER"} />
            <div data-aos="fade-up" className="mt-10">
          

            <div> 
             
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-4">
                     {
                          menu.map(item  =>  <div>
                            <div>
                                <div className="flex gap-4 ">
                                    <img src={item.image} style={{borderRadius :" 0px 200px 200px 200px " }} className="image-zoom w-[80px]" alt="" />
                                  <div>
                                  <p className="text-xl font-bold">{item.name}</p> 
                                      <p>{item.recipe}</p>
                                  </div>
                                  <p className="text-yellow-400"> {item.price}</p>       
                                </div>
                                
                                </div>
                                <div>
                                    </div>     
                                       
                        </div>)
                     }
                        
                </div>
                <ButtonShare button={"ORDER YOUR FAVOURITE FOOD"}/>                            
            </div>
            
        </div>
        </div>
    );
};

export default TodaysOffer;