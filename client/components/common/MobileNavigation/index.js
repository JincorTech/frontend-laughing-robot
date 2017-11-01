import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { translate } from 'react-i18next';
import s from './styles.scss';
import i18next from '../../../utils/i18next/client';

import { closeNavigation, changeView } from '../../../redux/modules/common/mobileNavigation';
import { changeLanguage } from '../../../redux/modules/app/i18next';

import Scroll from 'react-scroll';
import SLink from '../SLink';
import WhitePaperLink from '../../resourses/Links/WhitePaperLink';

const MobileNavigation = (props) => {
  const {
    view,
    open,
    closeNavigation,
    changeView,
    changeLanguage,
    location,
    t
  } = props;
  const { pathname } = location;

  const selectRu = () => {
    changeLanguage({ lang: 'ru', pathname });
    closeNavigation();
  };

  const selectEn = () => {
    changeLanguage({ lang: 'en', pathname });
    closeNavigation();
  };

  const openLangs = () => changeView('langs');

  const getCurrentLang = () => {
    switch (i18next.language) {
      case 'ru':
        return <a>Рус</a>;
      case 'en':
        return <a>Eng</a>;
      default:
        return <a>Eng</a>;
    }
  };

  const renderMenu = () => (
    <div className={s.menu}>
      <div className={s.link}>
        <WhitePaperLink/>
      </div>

      <div className={s.link}>
        <Scroll.Link
          onClick={() => closeNavigation()}
          to="aboutSection"
          smooth={true}
          className={s.linkInner}>
          {t('links.nav.vision.label')}
        </Scroll.Link>
      </div>

      <div className={s.link}>
        <Scroll.Link
          onClick={() => closeNavigation()}
          to="crowdsaleSection"
          smooth={true}
          className={s.linkInner}>
          {t('links.nav.crowdsale.label')}
        </Scroll.Link>
      </div>

      <div className={s.link}>
        <Scroll.Link
          onClick={() => closeNavigation()}
          to="teamSection"
          smooth={true}
          className={s.linkInner}>
          {t('links.nav.team.label')}
        </Scroll.Link>
      </div>

      <div className={s.link}>
        <Scroll.Link
          onClick={() => closeNavigation()}
          to="communitySection"
          smooth={true}
          className={s.linkInner}>
          {t('links.nav.community.label')}
        </Scroll.Link>
      </div>

      <div className={s.link}>
        <a href={t('links.nav.blog.href')}>
          {t('links.nav.blog.label')}
        </a>
      </div>

      <div className={s.link}>
        <SLink href='/faq'>
          {t('links.nav.faq.label')}
        </SLink>
      </div>

      <div className={s.link} onClick={() => openLangs()}>
        {getCurrentLang()}
      </div>
    </div>
  );

  const renderLangs = () => (
    <div className={s.menu}>
      <div className={s.link} onClick={() => selectEn()}><a>English</a></div>
      <div className={s.link} onClick={() => selectRu()}><a>Русский</a></div>
    </div>
  );

  const currentView = () => {
    switch (view) {
      case 'nav':
        return renderMenu();
      case 'langs':
        return renderLangs();
      default:
        return renderMenu();
    }
  };

  const renderMobileNavigation = () => (
    <div className={s.mobileNavigation}>
      <div>
        <div className={s.header}>
          <div className={s.button} onClick={() => closeNavigation()}>
            <img src={require('./svg/close.svg')}/>
          </div>
        </div>
      </div>
      <div>
        {currentView()}
      </div>
    </div>
  );

  return open ? renderMobileNavigation() : null;
};

const WithRouterComponent = withRouter(MobileNavigation);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  (state) => ({
    view: state.common.mobileNavigation.view,
    open: state.common.mobileNavigation.open
  }),
  {
    closeNavigation,
    changeView,
    changeLanguage
  }
)(TranslatedComponent);
