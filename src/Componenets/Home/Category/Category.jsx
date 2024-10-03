import SectionTitle from "../../SectionTiltle/SectionTitle/SectionTitle";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import imageA from '../../../assets/home/slide1.jpg'
import imageB from '../../../assets/home/slide2.jpg'
import imageC from '../../../assets/home/slide3.jpg'
import imageD from '../../../assets/home/slide4.jpg'
import imageE from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <div className="px-20  ">
            <SectionTitle heading={"---From 11:00am to 10:00pm---"} subHeading={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={imageA} alt="" className="rounded-lg image-zoom" />

                        <p className="-top-16 text-center font-extrabold text-[20px] relative text-yellow-400 border-2 bg-[#05050576] italic  ">SALADS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={imageC} alt="" className="rounded-lg image-zoom" />

                        <p className="-top-16 text-center font-extrabold text-[20px] relative text-yellow-400 border-2 bg-[#05050576] italic  ">SOUPS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={imageB} alt="" className="rounded-lg image-zoom" />

                        <p className="-top-16 text-center font-extrabold text-[20px] relative text-yellow-400 border-2 bg-[#05050576] italic  ">PIZZAS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={imageD} alt="" className="rounded-lg image-zoom" />

                        <p className="-top-16 text-center font-extrabold text-[20px] relative text-yellow-400 border-2 bg-[#05050576] italic  ">DESSERTS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={imageA} alt="" className="rounded-lg image-zoom" />

                        <p className="-top-16 text-center font-extrabold text-[20px] relative text-yellow-400  bg-[#05050576] italic w-60 mx-auto ">SALADS</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;