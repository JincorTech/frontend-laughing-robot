import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { openFaq } from '../../../redux/modules/common/faq';

const Footer = (props) => {
  const { openFaq, t } = props;

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.col}>
          <div className={s.head}>{t('footer.product.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><a onClick={() => openFaq()}>{t('footer.product.faq')}</a></div>
              <div className={s.link}><a>{t('footer.product.cases')}</a></div>
              <div className={s.link}><a>{t('footer.product.crowdsale')}</a></div>
              <div className={s.link}><a>{t('footer.product.team')}</a></div>
              <div className={s.link}><a>{t('footer.product.advisors')}</a></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.resourses.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><a>Whitepaper</a></div>
              <div className={s.link}><a>Yellowpaper</a></div>
              <div className={s.link}><a>Bussiness summary</a></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.legal.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><a>Privacy policy</a></div>
              <div className={s.link}><a>Terms & Conditions</a></div>
              <div className={s.link}><a>Disclaimer</a></div>
            </div>
          </div>
        </div>
        <div className={s.largeCol}>
          <div className={s.head}>{t('footer.jincor.title')}</div>
          <div className={s.content}>
            <div className={s.text}>{t('footer.jincor.text')}</div>
            <div className={s.socials}>
              <a className={s.social} href={t('links.socials.telegram.href')} rel="nofollow" target="_blank">
                <img src={require('../../../assets/images/socials/telegram.svg')}/>
              </a>
              <a className={s.social} href={t('links.socials.reddit.href')} rel="nofollow" target="_blank">
                <img src={require('../../../assets/images/socials/reddit.svg')}/>
              </a>
              <a className={s.social} href={t('links.socials.medium.href')} rel="nofollow" target="_blank">
                <img src={require('../../../assets/images/socials/medium.svg')}/>
              </a>
              <a className={s.social} href={t('links.socials.twitter.href')} rel="nofollow" target="_blank">
                <img src={require('../../../assets/images/socials/twitter.svg')}/>
              </a>
              <a className={s.social} href={t('links.socials.facebook.href')} rel="nofollow" target="_blank">
                <img src={require('../../../assets/images/socials/facebook.svg')}/>
              </a>
              <a className={s.social} href={t('links.socials.github.href')} rel="nofollow" target="_blank">
                <img src={require('../../../assets/images/socials/github.svg')}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Footer);
export default connect(
  () => ({}),
  {
    openFaq
  }
)(TranslatedComponent);
