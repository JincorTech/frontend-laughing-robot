import React from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { openBeta } from '../../../redux/modules/common/beta';
import { openSubscribe } from '../../../redux/modules/common/subscribe';

import Button from '../../common/Button';

const LandingSection = (props) => {
  const { openBeta, openSubscribe } = props;

  return (
    <div className={s.landing}>
      <div className={s.inner}>
        <h1 className={s.title}>Jincor ICO starts soon!</h1>
        <h3 className={s.description}>Join to build the platform for genuinely simple smart contracts and cryptocurrency transactions for any business. Stay tuned!</h3>

        <div className={s.buttons}>
          <div className={s.button}>
            <Button style="primary" onClick={() => openSubscribe()}>Subscribe</Button>
          </div>
          <div className={s.button}>
            <Button style="secondary" onClick={() => openBeta()}>Request beta</Button>
          </div>
        </div>

        <div className={s.socials}>
          <a className={s.social} href="https://github.com" target="_blank">
            <img src={require('../../../assets/images/socials/telegram.svg')}/>
          </a>
          <a className={s.social} href="https://github.com" target="_blank">
            <img src={require('../../../assets/images/socials/reddit.svg')}/>
          </a>
          <a className={s.social} href="https://github.com" target="_blank">
            <img src={require('../../../assets/images/socials/medium.svg')}/>
          </a>
          <a className={s.social} href="https://github.com" target="_blank">
            <img src={require('../../../assets/images/socials/twitter.svg')}/>
          </a>
          <a className={s.social} href="https://github.com" target="_blank">
            <img src={require('../../../assets/images/socials/facebook.svg')}/>
          </a>
          <a className={s.social} href="https://github.com" target="_blank">
            <img src={require('../../../assets/images/socials/github.svg')}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  () => ({}),
  {
    openBeta,
    openSubscribe
  }
)(LandingSection);
