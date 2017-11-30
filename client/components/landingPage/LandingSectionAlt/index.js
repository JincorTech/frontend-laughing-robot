import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const LandingSection = (props) => {
  const { t, utm } = props;

  return (
    <div className={s.landing}>
      <div className={s.inner}>
        <div className={s.logo}><img src={require('../../../assets/images/logo.svg')}/></div>
        <h1 className={s.title}>{t('landing.titleIco')}</h1>
        <h3 className={s.description}>{t('landing.subtitle')}</h3>

        <div className={s.buttons}>
          <div className={s.button}>
            <a className={s.primaryLink} href={`https://contribute.jincor.com/auth/signup${utm}`}>{t('landing.contributeIco')}</a>
          </div>
        </div>
      </div>

      <div className={s.pane}>
        <div className={s.paneWrap}>
          <div className={s.center}>
            <div className={s.block}>
              <div className={s.val}>{Number(123123.123123).toFixed()}</div>
              <div className={s.label}>{t('landing.raised')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>555</div>
              <div className={s.label}>{t('landing.contributors')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{Number(123123.123123).toFixed()}</div>
              <div className={s.label}>{t('landing.sold')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>45</div>
              <div className={s.label}>{t('landing.days')}</div>
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
