import React from 'react';
import s from './styles.scss';

import Button from '../../common/Button';

const LandingSection = () => (
  <div className={s.landing}>
    <div className={s.inner}>
      <h1 className={s.title}>Jincor ICO starts soon!</h1>
      <h3 className={s.description}>Join to build the platform for genuinely simple smart contracts and cryptocurrency transactions for any business. Stay tuned!</h3>

      <div className={s.buttons}>
        <div className={s.button}>
          <Button style="primary">Subscribe</Button>
        </div>
        <div className={s.button}>
          <Button style="secondary">Request beta</Button>
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

export default LandingSection;
