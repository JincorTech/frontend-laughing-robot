import React from 'react';
import s from './styles.scss';

import Slick from 'react-slick';
import PersonCard from '../PersonCard';
import CustomArrow from '../../common/CustomArrow';

const Team = () => {
  const settings = {
    dots: true,
    infinite: false,
    dotsClass: s.dots,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    swipeToSlide: false,
    nextArrow: <CustomArrow><img src={require('../../../assets/images/carousel/fwd.svg')}/></CustomArrow>,
    prevArrow: <CustomArrow><img src={require('../../../assets/images/carousel/back.svg')}/></CustomArrow>,
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

  const renderCarousel = () => (
    <Slick {...settings}>
      <div className={s.slickItem}>
        <PersonCard
          name="El Chito Drito"
          role="Head of drinking"
          about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
          photoElement={<img src={require('./images/photo.jpg')}/>}
          socialNetworks={[
            {
              href: 'https://github.com',
              icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
            },
            {
              href: 'https://linkeid.com',
              icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
            }
          ]}/>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name="El Chito Drito"
            role="Head of drinking"
            about="Invoicing and billing system implementation. Channel partner program launchTesting the waters of international markets, localization. Adding enterprise app integrations, external corporate identity verification."
            photoElement={<img src={require('./images/photo.jpg')}/>}/>
        </div>
      </div>
    </Slick>
  );

  return (
    <div className={s.team}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Executive Team</h2>
          <h4 className={s.subtitle}>Who’s making it real?</h4>
        </div>

        <div className={s.slick}>
          {renderCarousel()}
        </div>
      </div>
    </div>
  );
};

export default Team;
