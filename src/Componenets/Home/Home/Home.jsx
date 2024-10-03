import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FromOurMenu from "../FromOurMenus/FromOurMenu/FromOurMenu";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
          <Slider/>
          <Category/>
          <ChefService/>
          <FromOurMenu/>
        </div>
    );
};

export default Home;