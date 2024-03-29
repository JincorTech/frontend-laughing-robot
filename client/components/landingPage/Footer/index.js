import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import Scroll from 'react-scroll';
import SLink from '../../common/SLink';
import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import TechPaperLink from '../../resourses/Links/TechPaperLink';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import BusinessSummaryLink from '../../resourses/Links/BusinessSummaryLink';
import BrandResourcesLink from '../../resourses/Links/BrandResourcesLink';
import TokenAgreementLink from '../../resourses/Links/TokenAgreementLink';

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
              <div className={s.link}><a href={t('links.nav.blog.href')} target="_blank">{t('links.nav.blog.label')}</a></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.resourses.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><WhitePaperLink/></div>
              <div className={s.link}><TechPaperLink/></div>
              <div className={s.link}><BusinessSummaryLink/></div>
              <div className={s.link}><BrandResourcesLink/></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.legal.title')}</div>
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.link}><TermsOfUseLink/></div>
              <div className={s.link}><PrivacyPolicyLink/></div>
              <div className={s.link}><TokenAgreementLink/></div>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.head}>{t('footer.jincor.title')}</div>
          <div className={s.content}>
            <div className={s.text}>
              {t('footer.jincor.text')}
              <br/><br/>
              © Jincor 2017
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default translate()(Footer);
