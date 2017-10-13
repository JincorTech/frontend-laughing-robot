import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import s from './styles.scss';
import i18next from '../../../utils/i18next/client';

import { changeLanguage } from '../../../redux/modules/app/i18next';

import Scroll from 'react-scroll';
import SLink from '../../common/SLink';
import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import TechPaperLink from '../../resourses/Links/TechPaperLink';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import BusinessSummaryLink from '../../resourses/Links/BusinessSummaryLink';
import Dropdown from '../../common/Dropdown';

const Header = (props) => {
  const { changeLanguage, location, t } = props;
  const { pathname } = location;
  const selectRu = () => changeLanguage({ lang: 'ru', pathname });
  const selectEn = () => changeLanguage({ lang: 'en', pathname });

  const getCurrentLang = () => {
    switch (i18next.language) {
      case 'ru':
        return <a className={s.linkInner}><img src={require('../../../assets/images/flags/ru.svg')}/> Рус</a>;
      case 'en':
        return <a className={s.linkInner}><img src={require('../../../assets/images/flags/en.svg')}/> Eng</a>;
      default:
        return <a className={s.linkInner}><img src={require('../../../assets/images/flags/en.svg')}/> Eng</a>;
    }
  };

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.logo}>
          <div className={s.pic}><img src={require('../../../assets/images/logo.svg')}/></div>
          <div className={s.symbol}>Jincor</div>
        </div>

        <div className={s.nav}>
          <div className={s.link}>
            <a href={t('links.nav.blog.href')} target="_blank" rel="nofollow" className={s.linkInner}>{t('links.nav.blog.label')}</a>
          </div>
          <div className={s.link}>
            <SLink href="/faq">{t('links.nav.faq.label')}</SLink>
          </div>
          <div className={s.link}>
            <Dropdown
              button={<a className={s.linkInner}>{t('links.nav.downloads.label')}</a>}
              dropdown={[
                <WhitePaperLink key="whitepaper"/>,
                <TechPaperLink key="techpaper" className={s.disabled}/>,
                <BusinessSummaryLink key="bsummary"/>,
                <TermsOfUseLink key="tou"/>,
                <PrivacyPolicyLink key="pp"/>
              ]}/>
          </div>
          <div className={s.link}>
            <WhitePaperLink/>
          </div>
          <div className={s.link}>
            <Scroll.Link to="teamSection" smooth={true} className={s.linkInner}>{t('links.nav.team.label')}</Scroll.Link>
          </div>
          <div className={s.link}>
            <Dropdown
              button={getCurrentLang()}
              dropdown={[
                <a className={s.ddLink} key="lang.header.en" onClick={() => selectEn()}><img src={require('../../../assets/images/flags/en.svg')}/>English</a>,
                <a className={s.ddLink} key="lang.header.ru" onClick={() => selectRu()}><img src={require('../../../assets/images/flags/ru.svg')}/>Русский</a>
              ]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const WithRouterComponent = withRouter(Header);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  () => ({}),
  {
    changeLanguage
  }
)(TranslatedComponent);
