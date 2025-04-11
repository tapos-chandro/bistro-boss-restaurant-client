import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div >
      <Carousel
        className="text-center z-20  "
        thumbWidth={120}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={false}
      >
        <div className="">
          <img src="https://i.postimg.cc/VLdHB0b6/01.jpg" className="h-full w-full object-cover"/>
        </div>
        <div className="">
          <img src="https://i.postimg.cc/MGP9QWKR/02.jpg" className="h-full w-full object-cover" />
        </div>
        <div className="">
          <img src="https://i.postimg.cc/wxtGDsNB/03.png" className="h-full w-full object-cover"/>
        </div>
        <div className="">
          <img src="https://i.postimg.cc/rw9nq1Bf/04.jpg" className="h-full w-full object-cover"/>
        </div>
        <div className="">
          <img src="https://i.postimg.cc/xjWF5TG3/05.png" className="h-full w-full object-cover"/>
        </div>
        <div className="">
          <img src="https://i.postimg.cc/W3y02zpW/06.png" className="h-full w-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
