import Carousel from 'nuka-carousel';
import React from 'react';


const Banner = () => {

    return (
        <Carousel wrapAround={true}
        slidesToShow={3} autoplay autoplayInterval={2000} animation>
        <img src="https://i.ibb.co/R4f7BqT/man-riding-mountain-bike-low-angle.jpg" />
        <img src="https://i.ibb.co/7KtfX0H/cyclist-sunny-day-bike-adventure-travel-photo.jpg" />
        <img src="https://i.ibb.co/R4f7BqT/man-riding-mountain-bike-low-angle.jpg" />
        <img src="https://i.ibb.co/7KtfX0H/cyclist-sunny-day-bike-adventure-travel-photo.jpg" />
      </Carousel>
    );
};

export default Banner;