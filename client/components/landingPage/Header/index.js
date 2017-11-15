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
import Dropdown from '../../common/Dropdown';

const Header = (props) => {
  const { changeLanguage, location, t } = props;
  const { pathname } = location;
  const selectRu = () => changeLanguage({ lang: 'ru', pathname });
  const selectEn = () => changeLanguage({ lang: 'en', pathname });
  const selectPl = () => changeLanguage({ lang: 'pl', pathname });

  const getCurrentLang = () => {
    switch (i18next.language) {
      case 'ru':
        return <a className={s.linkInner}>Рус <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'en':
        return <a className={s.linkInner}>Eng <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      case 'pl':
        return <a className={s.linkInner}>Pol <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
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
                <a className={s.ddLink} key="lang.header.ru" onClick={() => selectRu()}>Русский</a>,
                <a className={s.ddLink} key="lang.header.pl" onClick={() => selectPl()}>Polski</a>
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
