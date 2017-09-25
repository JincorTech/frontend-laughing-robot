import React from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { openFaq } from '../../../redux/modules/common/faq';

const Footer = (props) => {
  const {
    openFaq
  } = props;

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.col}>
          <div className={s.head}>Product</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><a onClick={() => openFaq()}>FAQ</a></div>
              <div className={s.link}><a>Use Cases</a></div>
              <div className={s.link}><a>Crowdsale</a></div>
              <div className={s.link}><a>Executive Team</a></div>
              <div className={s.link}><a>Advisory Board</a></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>Resourses</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><a>Whitepaper</a></div>
              <div className={s.link}><a>Yellowpaper</a></div>
              <div className={s.link}><a>Bussiness summary</a></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>Legal</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><a>Privacy policy</a></div>
              <div className={s.link}><a>Terms & Conditions</a></div>
              <div className={s.link}><a>Disclaimer</a></div>
            </div>
          </div>
        </div>
        <div className={s.largeCol}>
          <div className={s.head}>Jincor</div>
          <div className={s.content}>
            <div className={s.text}>
              Jincor is an enterprise platform that aims to simplify the adoption of smart contracts and cryptocurrencies for any company
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
      </div>
    </div>
  );
};

export default connect(
  () => ({}),
  {
    openFaq
  }
)(Footer);
