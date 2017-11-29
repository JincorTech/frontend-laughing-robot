import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const LandingSection = (props) => {
  const { t, countdown } = props;

  const seconds = Math.floor((countdown) % 60);
  const minutes = Math.floor((countdown / 60) % 60);
  const hours = Math.floor((countdown / (60 * 60)) % 24);
  const days = Math.floor(countdown / (60 * 60 * 24));

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

      <div className={s.pane}>
        <div className={s.paneWrap}>
          <div className={s.center}>
            {days >= 1 ? <div className={s.block}>
              <div className={s.val}>{days}</div>
              <div className={s.label}>{t('landing.timer.day')}</div>
            </div> : null}
            <div className={s.block}>
              <div className={s.val}>{hours}</div>
              <div className={s.label}>{t('landing.timer.hour')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{minutes}</div>
              <div className={s.label}>{t('landing.timer.minute')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{seconds}</div>
              <div className={s.label}>{t('landing.timer.second')}</div>
            </div>
          </div>
          <div className={s.pullRight}>
            <a href="https://www.youtube.com/watch?v=3lq5IoXqo2k" target="_blank" rel="nofollow">{t('landing.howto')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(LandingSection);
export default TranslatedComponent;
