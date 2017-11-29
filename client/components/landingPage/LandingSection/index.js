import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const LandingSection = (props) => {
  const { t } = props;

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
            <div className={s.block}>
              <div className={s.val}>2</div>
              <div className={s.label}>Days</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>5</div>
              <div className={s.label}>Hours</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>15</div>
              <div className={s.label}>Minutes</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>10</div>
              <div className={s.label}>Seconds</div>
            </div>
          </div>
          <div className={s.pullRight}>
            <a href="https://www.youtube.com/watch?v=3lq5IoXqo2k" target="_blank" rel="nofollow">How to contribute?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(LandingSection);
export default TranslatedComponent;
