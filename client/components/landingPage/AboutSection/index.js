import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const AboutSection = ({ t }) => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <div className={s.what}>
          <h2 className={s.title}>{t('about.whatIs.title')}</h2>
          <h4 className={s.subtitle}>{t('about.whatIs.subtitle')}</h4>
          <div className={s.content}>
            <div className={s.text}>{t('about.whatIs.text')}</div>
          </div>
        </div>
        <div className={s.resourses}>
          <h2 className={s.title}>{t('about.resourses.title')}</h2>
          <h4 className={s.subtitle}>{t('about.resourses.subtitle')}</h4>
          <div className={s.content}>
            <div className={s.links}>
              <div><a>Whitepaper</a></div>
              <div><a>Yellowpaper</a></div>
              <div><a>Business Summary</a></div>
              <div><a>Terms & Conditions</a></div>
              <div><a>Disclaimer</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(AboutSection);
export default TranslatedComponent;
