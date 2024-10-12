import React from 'react';
import image from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="hero p-8  md:p-32 bg-fixed rounded-xl "
        style={{
          backgroundImage: "url(https://i.ibb.co.com/8cpNBY5/chef-service.jpg)",
        }}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className=" bg-white p-5 md:p-20 text-black rounded-xl  ">
            <p className='text-3xl md:text-3xl  font-bold  uppercase image-zoom'>Bistro Boss</p>
            <p className='text-sm image-zoom md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;