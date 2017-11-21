import React from 'react';
// import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

// import { openSubscribe } from '../../../redux/modules/common/subscribe';

// import Button from '../../common/Button';

const LandingSection = (props) => {
  const { t } = props;

  // <div className={s.button}>
  //   <Button style="blue" onClick={() => openSubscribe()}>{t('landing.subscribeButton')}</Button>
  // </div>

  return (
    <div className={s.landing}>
      <div className={s.inner}>
        <div className={s.logo}><img src={require('../../../assets/images/logo.svg')}/></div>
        <h1 className={s.title}>{t('landing.title')}</h1>
        <h3 className={s.description}>{t('landing.subtitle')}</h3>

        <div className={s.buttons}>
          <div className={s.button}>
            <a className={s.primaryLink} href="https://contribute.jincor.com">{t('landing.contribute')}</a>
          </div>
          <div className={s.button}>
            <a className={s.link} href={t('links.socials.telegram.href')}>
              <img className={s.telegramButton} src={require('../../../assets/images/common/telegramButton.svg')}/>
              {t('landing.telegramButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(LandingSection);
export default TranslatedComponent;
