import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import Scroll from 'react-scroll';
import SLink from '../../common/SLink';
import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import TechPaperLink from '../../resourses/Links/TechPaperLink';
import TermsAndConditionsLink from '../../resourses/Links/TermsAndConditionsLink';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import BusinessSummaryLink from '../../resourses/Links/BusinessSummaryLink';
import DisclaimerLink from '../../resourses/Links/DisclaimerLink';

const Footer = (props) => {
  const { t } = props;

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.col}>
          <div className={s.head}>{t('footer.product.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><SLink href="/faq">{t('footer.product.faq')}</SLink></div>
              <div className={s.link}><Scroll.Link smooth={true} to="casesSection">{t('footer.product.cases')}</Scroll.Link></div>
              <div className={s.link}><Scroll.Link smooth={true} to="crowdsaleSection">{t('footer.product.crowdsale')}</Scroll.Link></div>
              <div className={s.link}><Scroll.Link smooth={true} to="teamSection">{t('footer.product.team')}</Scroll.Link></div>
              <div className={s.link}><Scroll.Link smooth={true} to="advisorsSection">{t('footer.product.advisors')}</Scroll.Link></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.resourses.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><WhitePaperLink/></div>
              <div className={s.link}><TechPaperLink className={s.disabled}/></div>
              <div className={s.link}><BusinessSummaryLink/></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.legal.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><TermsAndConditionsLink className={s.disabled}/></div>
              <div className={s.link}><DisclaimerLink className={s.disabled}/></div>
              <div className={s.link}><PrivacyPolicyLink className={s.disabled}/></div>
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

export default translate()(Footer);
