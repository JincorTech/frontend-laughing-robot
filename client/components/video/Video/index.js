import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import s from './styles.scss';

import HelmetBase from '../../../components/common/HelmetBase';
import SLink from '../../common/SLink';

const Video = (props) => {
  const { goBack } = props;

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
      <HelmetBase>
        <title>Jincor Video</title>
      </HelmetBase>

      <div className={s.video}>
        <iframe
          src="https://www.youtube.com/embed/zOAVmaUWBkI"
          className={s.iframe}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen/>
      </div>

      {renderClose()}
    </div>
  );
};

const WithRouterComponent = withRouter(Video);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  null,
  {
    goBack
  }
)(TranslatedComponent);
