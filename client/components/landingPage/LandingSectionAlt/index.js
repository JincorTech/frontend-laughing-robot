import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { fetchIcoData } from '../../../redux/modules/landingPage/icoData';

class LandingSection extends Component {
  componentWillMount() {
    this.props.fetchIcoData();
  }

  render() {
    const {
      t,
      utm,
      jcrTokensSold,
      ethCollected,
      contributionsCount,
      daysLeft
    } = this.props;

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
                <div className={s.val}>{Number(ethCollected).toFixed()}</div>
                <div className={s.label}>{t('landing.raised')}</div>
              </div>
              <div className={s.block}>
                <div className={s.val}>{contributionsCount}</div>
                <div className={s.label}>{t('landing.contributors')}</div>
              </div>
              <div className={s.block}>
                <div className={s.val}>{Number(jcrTokensSold).toFixed()}</div>
                <div className={s.label}>{t('landing.sold')}</div>
              </div>
              <div className={s.block}>
                <div className={s.val}>{daysLeft}</div>
                <div className={s.label}>{t('landing.days')}</div>
              </div>
            </div>
            <div className={s.pullRight}>
              <a href="https://www.youtube.com/watch?v=3lq5IoXqo2k" target="_blank" rel="nofollow">
                <img src={require('./images/playVideo.svg')}/>
                {t('landing.howto')}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const TranslatedComponent = translate()(LandingSection);
export default connect(
  (state) => ({
    ...state.landingPage.icoData
  }),
  {
    fetchIcoData
  }
)(TranslatedComponent);
