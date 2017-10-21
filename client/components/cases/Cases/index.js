import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { translate, Interpolate } from 'react-i18next';

import s from './styles.scss';

import SLink from '../../common/SLink';

const Cases = (props) => {
  const { t, goBack } = props;

  const renderClose = () => {
    if (props.history.location.key) {
      return (
        <button className={s.close} type="button" onClick={() => goBack()}>
          <img src={require('../../../assets/images/common/closePopup.svg')}/>
        </button>
      );
    } else {
      return (
        <SLink className={s.close} to="/">
          <img src={require('../../../assets/images/common/closePopup.svg')}/>
        </SLink>
      );
    }
  };

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.case}>
          <h1 className={s.title}>{t('cases.full.1.title')}</h1>
          <h3 className={s.subtitle}>{t('cases.full.1.subtitle')}</h3>
          <Interpolate
            i18nKey="cases.full.1.text"
            useDangerouslySetInnerHTML={true}/>
        </div>

        <div className={s.case}>
          <h1 className={s.title}>{t('cases.full.2.title')}</h1>
          <h3 className={s.subtitle}>{t('cases.full.2.subtitle')}</h3>
          <Interpolate
            i18nKey="cases.full.1.text"
            useDangerouslySetInnerHTML={true}/>
        </div>

        <div className={s.case}>
          <h1 className={s.title}>{t('cases.full.3.title')}</h1>
          <h3 className={s.subtitle}>{t('cases.full.3.subtitle')}</h3>
          <Interpolate
            i18nKey="cases.full.1.text"
            useDangerouslySetInnerHTML={true}/>
        </div>
      </div>

      {renderClose()}
    </div>
  );
};

const WithRouterComponent = withRouter(Cases);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  null,
  {
    goBack
  }
)(TranslatedComponent);
