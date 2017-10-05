import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import Slick from 'react-slick';
import PersonCard from '../PersonCard';

const Advisors = (props) => {
  const { t } = props;

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
        breakpoint: 375,
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
        breakpoint: 414,
        settings: {
          centerPadding: '50px',
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
        breakpoint: 480,
        settings: {
          centerPadding: '70px',
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
          <h2 className={s.title}>{t('advisors.title')}</h2>
          <h4 className={s.subtitle}>{t('advisors.subtitle')}</h4>
        </div>

        <div className={s.slick}>
          <Slick {...settings}>
            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name={t('advisors.members.simon.name')}
                  role={t('advisors.members.simon.position')}
                  about={t('advisors.members.simon.bio')}
                  photoElement={<img src={require('../../../assets/images/photos/simon.jpg')}/>}
                  socialNetworks={[
                    {
                      href: 'https://www.linkedin.com/in/simon-cocking-20540135/',
                      icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
                    },
                    {
                      href: 'https://twitter.com/SimonCocking',
                      icon: <img src={require('../../../assets/images/teamSocials/twitter.svg')}/>
                    }
                  ]}/>
              </div>
            </div>

            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name={t('advisors.members.stas.name')}
                  role={t('advisors.members.stas.position')}
                  about={t('advisors.members.stas.bio')}
                  photoElement={<img src={require('../../../assets/images/photos/stas.jpg')}/>}
                  socialNetworks={[
                    {
                      href: 'https://www.linkedin.com/in/skoleso/',
                      icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
                    }
                  ]}/>
              </div>
            </div>

            <div>
              <div className={s.slickItem}>
                <PersonCard
                  name={t('advisors.members.tomas.name')}
                  role={t('advisors.members.tomas.position')}
                  about={t('advisors.members.tomas.bio')}
                  photoElement={<img src={require('../../../assets/images/photos/tomas.jpg')}/>}
                  socialNetworks={[
                    {
                      href: 'https://www.linkedin.com/in/tomaskarner/',
                      icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
                    }
                  ]}/>
              </div>
            </div>

          </Slick>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Advisors);
export default TranslatedComponent;
