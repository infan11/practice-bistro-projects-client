 import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/UseMenu/useMenu';
import FoodCard from '../FoodCard/FoodCard';

const OurShopCard = () => {
    const [menu] = useMenu();
    console.log(menu);
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className='max-w-7xl mx-auto px-[70px]  md:px-36'>
        
  <Tabs className={" text-center mt-4 mb-5" }>
    <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZA</Tab>
      <Tab>SOUPS</Tab>
      <Tab>DESSERTS</Tab>
      <Tab>DRINKS</Tab>
    </TabList>

    <TabPanel>
       <div className='grid md:grid-cols-3 gap-10'>
       {
            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
       </div>
    </TabPanel>
    <TabPanel>
       <div className='grid md:grid-cols-3 gap-10'>
       {
            pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
       </div>
    </TabPanel>
    <TabPanel>
       <div className='grid md:grid-cols-3 gap-10'>
       {
            soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
       </div>
    </TabPanel>
    <TabPanel>
       <div className='grid md:grid-cols-3 gap-10'>
       {
            dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
       </div>
    </TabPanel>
    <TabPanel>
       <div className='grid md:grid-cols-3 gap-10'>
       {
            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
       </div>
    </TabPanel>
 
  </Tabs>

        </div>
    );
};

export default OurShopCard;