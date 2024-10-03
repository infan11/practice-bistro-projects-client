import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTiltle/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import ButtonShare from "../../../Section/ButtonShare/ButtonShare";


const FromOurMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
           fetch("/menu.json")
           .then(res => res.json())
           .then(data => {
          const popularItems = data.filter(item => item.category === "popular")
          setMenu(popularItems)
          
           })
    }, [])
    return (
        <div className="mt-10">
            <SectionTitle heading={"---Check it out---"} subHeading={"FROM OUR MENU"} />

            <div> 
             
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-4">
                     {
                          menu.map(item  => <MenuItem key={item.id} item={item}></MenuItem>)
                     }
                        
                </div>
                <ButtonShare button={"VIEW  ALL  MENU"}/> 
            </div>
            
        </div>
    );
};

export default FromOurMenu;