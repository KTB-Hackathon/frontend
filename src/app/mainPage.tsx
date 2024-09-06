import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './mainPage.css';

import slide1 from '/slide1.png';
import slide2 from '/slide2.png';

const MainPage: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [slide1, slide2];

  return (
    <div className="main-page">
      <Slider {...settings} className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`slide-${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="overlay">
        <div className="content">
          <p className="title">
            <img src="/logoWhite.png" alt="충-저니 로고" className='logo'/>
          </p>
          <div className="button-container">
            <Link to="/pickCity" className="button">
              여행지 추천 받기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;