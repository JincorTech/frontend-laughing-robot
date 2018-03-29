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
      t
    } = this.props;

    return (
      <div className={s.landing}>
        <div className={s.inner}>
          <div className={s.logo}><img src={require('../../../assets/images/logo.svg')}/></div>
          <h1 className={s.title}>{t('landing.titleIco')}</h1>
          <h3 className={s.description}>{t('landing.subtitle')}</h3>
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
