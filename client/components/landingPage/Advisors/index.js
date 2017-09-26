import React from 'react';
import s from './styles.scss';

import Slick from 'react-slick';
import PersonCard from '../PersonCard';

const Advisors = () => {
  const settings = {
    dots: true,
    infinite: false,
    dotsClass: s.dots,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: '30px',
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
          centerMode: true,
          arrows: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <div className={s.advisors}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Advisory Board</h2>
          <h4 className={s.subtitle}>Our magnificent supporters</h4>
        </div>

        <div className={s.slick}>
          <Slick {...settings}>
            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name="El Chito Drito"
                  role="Head of drinking"
                  about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
                  photoElement={<img src={require('../Team/images/photo.jpg')}/>}/>
              </div>
            </div>
            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name="El Chito Drito"
                  role="Head of drinking"
                  about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
                  photoElement={<img src={require('../Team/images/photo.jpg')}/>}/>
              </div>
            </div>
            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name="El Chito Drito"
                  role="Head of drinking"
                  about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
                  photoElement={<img src={require('../Team/images/photo.jpg')}/>}/>
              </div>
            </div>
            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name="El Chito Drito"
                  role="Head of drinking"
                  about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
                  photoElement={<img src={require('../Team/images/photo.jpg')}/>}/>
              </div>
            </div>
          </Slick>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
