import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { NextArrow,PrevArrow } from "./Arrows.component";


const HeroCarousal = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    dots: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

const images =[
  "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1630492936612_fastandfurious9underthestars_pvrdrive_webshowcase_1240x300.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1630041396807_bellbottomunderthestarspvrdriveinexperience_webshowcase_1240x300.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1630177100306_completecollectionofbacktothefuture_1240x300.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg"
]

  return (
    <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
  {
    images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3 px-1 focus:outline-none">
      <img src={image} alt="testing" className="w-full h-full rounded-md cursor-pointer"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

  <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3 focus:outline-none">
      <img src={image} alt="testing" className="w-full h-full rounded-md cursor-pointer "/>
      </div>
    ))
  }
  </HeroSlider>
  </div>
    </>
  );
};

export default HeroCarousal;


