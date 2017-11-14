import React from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import s from './styles.scss';

import Slick from 'react-slick';
import CustomArrow from '../../common/CustomArrow';

const ProductCarousel = () => {
  const desktopSettings = {
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          swipe: true,
          swipeToSlide: true
        }
      }
    ]
  };

  const mobileSettings = {
    className: 'product',
    dots: true,
    infinite: false,
    dotsClass: s.dots,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          nextArrow: <CustomArrow className={s.mid}><img src={require('../../../assets/images/carousel/fwd.svg')}/></CustomArrow>,
          prevArrow: <CustomArrow className={s.mid}><img src={require('../../../assets/images/carousel/back.svg')}/></CustomArrow>
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          nextArrow: null,
          prevArrow: null
        }
      }
    ]
  };

  return (
    <div className={s.product}>
      <div className={s.container}>
        <UserAgent computer>
          <Slick {...desktopSettings}>
            <div className={s.slide}><img src={require('./images/jincor_pc_first.png')}/></div>
            <div className={s.slide}><img src={require('./images/jincor_pc_second.png')}/></div>
            <div className={s.slide}><img src={require('./images/jincor_pc_third.png')}/></div>
          </Slick>
        </UserAgent>
        <UserAgent mobile>
          <Slick {...mobileSettings}>
            <div className={s.slide}><img src={require('./images/jincor_pc_mobile_first.png')}/></div>
            <div className={s.slide}><img src={require('./images/jincor_pc_mobile_second.png')}/></div>
            <div className={s.slide}><img src={require('./images/jincor_pc_mobile_third.png')}/></div>
          </Slick>
        </UserAgent>
      </div>
    </div>
  );
};

export default ProductCarousel;
