import { Helmet } from "react-helmet";
import ButtonShare from "../../Section/ButtonShare/ButtonShare";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FromOurMenu from "../FromOurMenus/FromOurMenu/FromOurMenu";
import MenuCard from "../MenuCard/MenuCard";
import MenuService from "../MenuService/MenuService";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
          <Helmet title="BISTRO BOSS | HOME"></Helmet>
          <Slider/>
          <Category/>
          <ChefService/>
          <FromOurMenu/>
          <CallUs/>
          <MenuService/>
          <MenuCard/>
          <Reviews/>
        </div>
    );
};

export default Home;