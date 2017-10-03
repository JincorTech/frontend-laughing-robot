import React from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { openNavigation } from '../../../redux/modules/common/mobileNavigation';

const MobileHeader = (props) => {
  const { openNavigation } = props;

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src={require('../../../assets/images/logo.svg')}/>
        </div>
        <div className={s.button} onClick={() => openNavigation()}>
          <img src={require('./images/burger.svg')}/>
        </div>
      </div>
    </div>
  );
};

export default connect(
  () => ({}),
  {
    openNavigation
  }
)(MobileHeader);
