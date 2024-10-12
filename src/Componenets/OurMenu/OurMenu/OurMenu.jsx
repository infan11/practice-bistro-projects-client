
import { Helmet } from "react-helmet-async";
import Dessert from "../Dessert/Dessert/Dessert";
import MenuBanner from "../MenuBanner/MenuBanner";
import Pizza from "../Pizza/Pizza/Pizza";
import Salad from "../Salad/Salad/Salad";
import Soup from "../Soup/Soup/Soup";
import TodaysOffer from "../TodaysOffer/TodaysOffer";


const OurMenu = () => {
    return (
        <div>
            <Helmet title="BISTRO BOSS | OUR MENU"/>
            <MenuBanner/>
            <TodaysOffer/>
            <Dessert/>
            <Pizza/>
            <Salad/>
            <Soup/>
        </div>
    );
};

export default OurMenu;