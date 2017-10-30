import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import Slick from 'react-slick';
import PersonCard from '../PersonCard';
import CustomArrow from '../../common/CustomArrow';

const Advisors = (props) => {
  const { t } = props;

  const settings = {
    dots: true,
    infinite: false,
    dotsClass: s.dots,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: false,
    swipeToSlide: false,
    nextArrow: <CustomArrow><img src={require('../../../assets/images/carousel/fwd.svg')}/></CustomArrow>,
    prevArrow: <CustomArrow><img src={require('../../../assets/images/carousel/back.svg')}/></CustomArrow>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          swipeToSlide: true,
          centerMode: false,
          arrows: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
          centerMode: false,
          arrows: false
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
                  name={t('advisors.members.marcus.name')}
                  role={t('advisors.members.marcus.position')}
                  about={t('advisors.members.marcus.bio')}
                  photoElement={<img src={require('../../../assets/images/photos/marcus.jpg')}/>}
                  socialNetworks={[
                    {
                      href: 'https://www.linkedin.com/in/marcus-killick-obe-85b8376/',
                      icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
                    }
                  ]}/>
              </div>
            </div>

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
