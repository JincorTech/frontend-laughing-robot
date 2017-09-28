import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import Slick from 'react-slick';
import PersonCard from '../PersonCard';
import CustomArrow from '../../common/CustomArrow';

const Team = (props) => {
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
    nextArrow: <CustomArrow><img src={require('../../../assets/images/carousel/fwd.svg')}/></CustomArrow>,
    prevArrow: <CustomArrow><img src={require('../../../assets/images/carousel/back.svg')}/></CustomArrow>,
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

  const renderCarousel = () => (
    <Slick {...settings}>
      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.vlad.name')}
            role={t('team.members.vlad.position')}
            about={t('team.members.vlad.bio')}
            photoElement={<img src={require('../../../assets/images/photos/vlad_k.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/vladislav-kirichenko-800a99a3/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://www.facebook.com/vladislkr/',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.vagan.name')}
            role={t('team.members.vagan.position')}
            about={t('team.members.vagan.bio')}
            photoElement={<img src={require('../../../assets/images/photos/vagan.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/vaganabelyan/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://www.facebook.com/abelyan.v/',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.andrey.name')}
            role={t('team.members.andrey.position')}
            about={t('team.members.andrey.bio')}
            photoElement={<img src={require('../../../assets/images/photos/andrey.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/degtyaruk-andrey-44042746/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://github.com/hlogeon/',
                icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.nastya.name')}
            role={t('team.members.nastya.position')}
            about={t('team.members.nastya.bio')}
            photoElement={<img src={require('../../../assets/images/photos/anastasia.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/ana-balashova/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://www.facebook.com/mukopu3a/',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.gega.name')}
            role={t('team.members.gega.position')}
            about={t('team.members.gega.bio')}
            photoElement={<img src={require('../../../assets/images/photos/george.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/george-paliani-0558ba142/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://www.facebook.com/gega007/',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.aidar.name')}
            role={t('team.members.aidar.position')}
            about={t('team.members.aidar.bio')}
            photoElement={<img src={require('../../../assets/images/photos/aidar.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/aidar-ibatullin-5a575a11b/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://github.com/Amazing-Space-Invader',
                icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.artem.name')}
            role={t('team.members.artem.position')}
            about={t('team.members.artem.bio')}
            photoElement={<img src={require('../../../assets/images/photos/artem.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://github.com/artemii235/',
                icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.alexandr_s.name')}
            role={t('team.members.alexandr_s.position')}
            about={t('team.members.alexandr_s.bio')}
            photoElement={<img src={require('../../../assets/images/photos/alexandr_sh.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/alexandersedelnikov/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://github.com/AlekNS',
                icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.alexandr_i.name')}
            role={t('team.members.alexandr_i.position')}
            about={t('team.members.alexandr_i.bio')}
            photoElement={<img src={require('../../../assets/images/photos/alexandr_i.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://github.com/kotokur',
                icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.alexandr_sh.name')}
            role={t('team.members.alexandr_sh.position')}
            about={t('team.members.alexandr_sh.bio')}
            photoElement={<img src={require('../../../assets/images/photos/alexandr_sh.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://github.com/Aleserche',
                icon: <img src={require('../../../assets/images/teamSocials/github.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.khasan.name')}
            role={t('team.members.khasan.position')}
            about={t('team.members.khasan.bio')}
            photoElement={<img src={require('../../../assets/images/photos/khasan.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://it.pinterest.com/khasanerkenov/',
                icon: <img src={require('../../../assets/images/teamSocials/pinterest.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.alexandra_s.name')}
            role={t('team.members.alexandra_s.position')}
            about={t('team.members.alexandra_s.bio')}
            photoElement={<img src={require('../../../assets/images/photos/alexandra_s.jpg')}/>}
            socialNetworks={[
              {
                href: 'http://facebook.com/alexandra.samuilkina',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.anton_a.name')}
            role={t('team.members.anton_a.position')}
            about={t('team.members.anton_a.bio')}
            photoElement={<img src={require('../../../assets/images/photos/anton_a.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.facebook.com/anton.atsekhovskyy',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.anton_l.name')}
            role={t('team.members.anton_l.position')}
            about={t('team.members.anton_l.bio')}
            photoElement={<img src={require('../../../assets/images/photos/anton_l.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/anton-lysakov-84795622/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              }
            ]}/>
        </div>
      </div>

      <div>
        <div className={s.slickItem}>
          <PersonCard
            name={t('team.members.vlad_b.name')}
            role={t('team.members.vlad_b.position')}
            about={t('team.members.vlad_b.bio')}
            photoElement={<img src={require('../../../assets/images/photos/vlad_b.jpg')}/>}
            socialNetworks={[
              {
                href: 'https://www.linkedin.com/in/vladislav-belousov-29461450/',
                icon: <img src={require('../../../assets/images/teamSocials/linkedin.svg')}/>
              },
              {
                href: 'https://www.facebook.com/vladislav.belousov.98',
                icon: <img src={require('../../../assets/images/teamSocials/facebook.svg')}/>
              }
            ]}/>
        </div>
      </div>

    </Slick>
  );

  return (
    <div className={s.team}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('team.title')}</h2>
          <h4 className={s.subtitle}>{t('team.subtitle')}</h4>
        </div>

        <div className={s.slick}>
          {renderCarousel()}
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Team);
export default TranslatedComponent;
