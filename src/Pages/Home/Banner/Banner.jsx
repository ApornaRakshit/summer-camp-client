import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import bannerImg1 from '../../../assets/banner/banner1.jpg'
import bannerImg2 from '../../../assets/banner/banner2.jpg'
import bannerImg3 from '../../../assets/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <div className=" text-white bg-gray-800 text-center p-3">
                <h4>Call Today for a Free Lesson</h4>
                <p>357-123-9510</p>
            </div>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                        <div className="hero h-[700px] " style={{ backgroundImage: `url("${bannerImg3}")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">

                                    <p className="mb-5 font-semibold">"Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife."<br />-Kahlil Gibran</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-[700px]" style={{ backgroundImage: `url("${bannerImg1}")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    
                                    <p className="mb-5 font-semibold">Music is the shorthand of emotion.<br />-Leo Tolstoy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-[700px]" style={{ backgroundImage: `url("${bannerImg2}")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">

                                    <p className="mb-5 font-semibold">The only truth is music.<br />-Jack Kerouac</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    

                </Swiper>
            </>
        </div>

    );
};

export default Banner;