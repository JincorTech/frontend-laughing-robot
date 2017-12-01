import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import s from './styles.scss';
import i18next from '../../../utils/i18next/client';

import { changeLanguage } from '../../../redux/modules/app/i18next';
import { openBeta } from '../../../redux/modules/common/beta';

import Scroll from 'react-scroll';
import SLink from '../../common/SLink';
import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import Dropdown from '../../common/Dropdown';

const Header = (props) => {
  const { changeLanguage, openBeta, location, t } = props;
  const { pathname } = location;
  const selectZh = () => changeLanguage({ lang: 'zh', pathname });
  const selectEn = () => changeLanguage({ lang: 'en', pathname });
  const selectEs = () => changeLanguage({ lang: 'es', pathname });
  const selectHi = () => changeLanguage({ lang: 'hi', pathname });
  const selectIt = () => changeLanguage({ lang: 'it', pathname });
  const selectJa = () => changeLanguage({ lang: 'ja', pathname });
  const selectKo = () => changeLanguage({ lang: 'ko', pathname });
  const selectPl = () => changeLanguage({ lang: 'pl', pathname });
  const selectPt = () => changeLanguage({ lang: 'pt', pathname });
  const selectRo = () => changeLanguage({ lang: 'ro', pathname });
  const selectRu = () => changeLanguage({ lang: 'ru', pathname });

  const getCurrentLang = () => {
    switch (i18next.language) {
      case 'zh':
        return <a className={s.linkInner}>Chi <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'en':
        return <a className={s.linkInner}>Eng <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'es':
        return <a className={s.linkInner}>Esp <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'hi':
        return <a className={s.linkInner}>Hin <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'it':
        return <a className={s.linkInner}>Ita <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'ja':
        return <a className={s.linkInner}>Jpn <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'ko':
        return <a className={s.linkInner}>Kor <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'pl':
        return <a className={s.linkInner}>Pol <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'pt':
        return <a className={s.linkInner}>Por <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'ro':
        return <a className={s.linkInner}>Rum <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'ru':
        return <a className={s.linkInner}>Rus <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      default:
        return <a className={s.linkInner}>Eng <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
    }
  };

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.nav}>
          <div className={s.link}>
            <WhitePaperLink/>
          </div>
          <div className={s.link}>
            <Scroll.Link to="aboutSection" smooth={true} className={s.linkInner}>{t('links.nav.vision.label')}</Scroll.Link>
          </div>
          <div className={s.link}>
            <Scroll.Link to="crowdsaleSection" smooth={true} className={s.linkInner}>{t('links.nav.crowdsale.label')}</Scroll.Link>
          </div>
          <div className={s.link}>
            <Scroll.Link to="teamSection" smooth={true} className={s.linkInner}>{t('links.nav.team.label')}</Scroll.Link>
          </div>
          <div className={s.link}>
            <Scroll.Link to="communitySection" smooth={true} className={s.linkInner}>{t('links.nav.community.label')}</Scroll.Link>
          </div>
          <div className={s.link}>
            <a href={t('links.nav.blog.href')} target="_blank" rel="nofollow" className={s.linkInner}>{t('links.nav.blog.label')}</a>
          </div>
          <div className={s.link}>
            <SLink to="/faq" className={s.linkInner}>FAQ</SLink>
          </div>
          <div className={s.link}>
            <Dropdown
              button={getCurrentLang()}
              dropdown={[
                <a className={s.ddLink} key="lang.header.en" onClick={() => selectEn()}>English</a>,
                <a className={s.ddLink} key="lang.header.es" onClick={() => selectEs()}>Español</a>,
                <a className={s.ddLink} key="lang.header.pt" onClick={() => selectPt()}>Portugues</a>,
                <a className={s.ddLink} key="lang.header.ko" onClick={() => selectKo()}>한국어</a>,
                <a className={s.ddLink} key="lang.header.ru" onClick={() => selectRu()}>Русский</a>,
                <a className={s.ddLink} key="lang.header.zh" onClick={() => selectZh()}>中國</a>,
                <a className={s.ddLink} key="lang.header.hi" onClick={() => selectHi()}>हिन्दी</a>,
                <a className={s.ddLink} key="lang.header.ja" onClick={() => selectJa()}>日本語</a>,
                <a className={s.ddLink} key="lang.header.it" onClick={() => selectIt()}>Italiano</a>,
                <a className={s.ddLink} key="lang.header.pl" onClick={() => selectPl()}>Polonês</a>,
                <a className={s.ddLink} key="lang.header.ro" onClick={() => selectRo()}>Românesc</a>
              ]}/>
          </div>

          <div className={s.beta}>
            <a className={s.secondaryButton} onClick={() => openBeta()}>{t('landing.betaButton')}</a>
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
    changeLanguage,
    openBeta
  }
)(TranslatedComponent);
