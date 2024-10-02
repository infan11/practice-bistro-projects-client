import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import imageB from '../../../.../../assets/home/06.png'
import imageA from '../../../.../../assets/home/02.jpg'
import imageC from '../../../.../../assets/home/03.png'
import imageD from '../../../.../../assets/home/04.jpg'
import imageE from '../../../.../../assets/home/05.png'
import imageF from '../../../.../../assets/home/01.jpg'
const Slider = () => {
  return (
    <div>
           <Carousel className="">
                <div>
                    <img src={imageA} />
                    
                </div>
                <div>
                    <img src={imageB} />
                    
                </div>
                <div>
                    <img src={imageC} />
                    
                </div>
                <div>
                    <img src={imageD} />
                    
                </div>
                <div>
                    <img src={imageE} />
                    
                </div>
                <div>
                    <img src={imageF} />
                    
                </div>
                
            </Carousel>
    </div>
  );
};

export default Slider;