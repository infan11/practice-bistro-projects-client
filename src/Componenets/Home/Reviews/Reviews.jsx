import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTiltle/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcRating } from "react-icons/fc";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={"---What Our Clients Say---"} subHeading={"TESTIMONIALS"} />
            <div>
                <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">
                    {
                        review.map(reviews => <div>
                            <SwiperSlide>
                                <div className='ml-[110px] md:ml-[630px]'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reviews.rating}
                                        readOnly
                                    />

                                </div>
                                <p className= 'text-[7px]  md:text-[13px] px-10 text-center'>{reviews.details}</p>
                                <p className='text-center font-bold text-orange-300 mt-6'>{reviews.name}</p>
                            </SwiperSlide>
                        </div>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;