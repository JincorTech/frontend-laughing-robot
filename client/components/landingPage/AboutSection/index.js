import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import SLink from '../../common/SLink';

const AboutSection = (props) => {
  const { t } = props;

  return (
    <div className={s.about}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('about.title')}</h2>
        </div>

        <div className={s.body}>
          <div className={s.text}>{t('about.text')}</div>
          <div className={s.button}>
            <SLink to="/video" className={s.buttonElement}>
              <img src={require('./svg/video.svg')}/>
              {t('about.video')}
            </SLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(AboutSection);
export default TranslatedComponent;
