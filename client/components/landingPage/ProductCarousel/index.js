import React from 'react';
import s from './styles.scss';

import Slick from 'react-slick';
import CustomArrow from '../../common/CustomArrow';

const ProductCarousel = () => {
  const settings = {
    className: 'product',
    dots: true,
    infinite: false,
    dotsClass: s.dots,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    swipeToSlide: false,
    nextArrow: <CustomArrow className={s.mid}><img src={require('../../../assets/images/carousel/fwd.svg')}/></CustomArrow>,
    prevArrow: <CustomArrow className={s.mid}><img src={require('../../../assets/images/carousel/back.svg')}/></CustomArrow>,
  };

  return (
    <div className={s.product}>
      <div className={s.container}>
        <Slick {...settings}>
          <div className={s.slide}><img src={require('./images/1.png')}/></div>
          <div className={s.slide}><img src={require('./images/1.png')}/></div>
          <div className={s.slide}><img src={require('./images/1.png')}/></div>
        </Slick>
      </div>
    </div>
  );
};

export default ProductCarousel;
