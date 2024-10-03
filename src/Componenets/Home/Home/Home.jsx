import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
          <Slider/>
          <Category/>
          <ChefService/>
        </div>
    );
};

export default Home;