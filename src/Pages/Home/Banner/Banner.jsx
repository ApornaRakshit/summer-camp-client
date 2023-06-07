import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import bannerImg1 from '../../../assets/banner/banner1.jpg'
import bannerImg2 from '../../../assets/banner/banner2.jpg'
import bannerImg3 from '../../../assets/banner/banner3.jpg'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={bannerImg1} />
                    <p className="legend">Music is the shorthand of emotion.<br/>Leo Tolstoy</p>
                </div>
                <div>
                    <img src={bannerImg2} />
                    <p className="legend">The only truth is music.<br/>Jack Kerouac</p>
                </div>
                <div>
                    <img src={bannerImg3} />
                    <p className="legend">"Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife."<br/>Kahlil Gibran</p>
                </div>
            </Carousel>
    );
};

export default Banner;