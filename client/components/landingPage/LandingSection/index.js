import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { openBeta } from '../../../redux/modules/common/beta';
import { openSubscribe } from '../../../redux/modules/common/subscribe';

import Button from '../../common/Button';

const LandingSection = (props) => {
  const { openBeta, openSubscribe, t } = props;

  return (
    <div className={s.landing}>
      <div className={s.inner}>
        <h1 className={s.title}>{t('landing.title')}</h1>
        <h3 className={s.description}>{t('landing.subtitle')}</h3>

        <div className={s.buttons}>
          <div className={s.button}>
            <Button style="primary" onClick={() => openSubscribe()}>{t('landing.subscribeButton')}</Button>
          </div>
          <div className={s.button}>
            <Button style="secondary" onClick={() => openBeta()}>{t('landing.betaButton')}</Button>
          </div>
        </div>

        <div className={s.socials}>
          <a className={s.social} href={t('links.socials.telegram.href')} target="_blank">
            <img src={require('../../../assets/images/socials/telegram.svg')}/>
          </a>
          <a className={s.social} href={t('links.socials.reddit.href')} target="_blank">
            <img src={require('../../../assets/images/socials/reddit.svg')}/>
          </a>
          <a className={s.social} href={t('links.socials.medium.href')} target="_blank">
            <img src={require('../../../assets/images/socials/medium.svg')}/>
          </a>
          <a className={s.social} href={t('links.socials.twitter.href')} target="_blank">
            <img src={require('../../../assets/images/socials/twitter.svg')}/>
          </a>
          <a className={s.social} href={t('links.socials.facebook.href')} target="_blank">
            <img src={require('../../../assets/images/socials/facebook.svg')}/>
          </a>
          <a className={s.social} href={t('links.socials.github.href')} target="_blank">
            <img src={require('../../../assets/images/socials/github.svg')}/>
          </a>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(LandingSection);
export default connect(
  () => ({}),
  {
    openBeta,
    openSubscribe
  }
)(TranslatedComponent);
