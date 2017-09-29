import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { translate } from 'react-i18next';
import s from './styles.scss';
import i18next from '../../../utils/i18next/client';

import { closeNavigation, changeView } from '../../../redux/modules/common/mobileNavigation';
import { changeLanguage } from '../../../redux/modules/app/i18next';

import Popup from '../Popup';

const MobileNavigation = (props) => {
  const { view, open, closeNavigation, changeView, changeLanguage, location, t } = props;
  const { pathname } = location;

  const selectRu = () => changeLanguage({ lang: 'ru', pathname });
  const selectEn = () => changeLanguage({ lang: 'en', pathname });
  const openMenu = () => changeView('nav');
  const openLangs = () => changeView('langs');
  const openResourses = () => changeView('resourses');

  const getCurrentLang = () => {
    switch (i18next.language) {
      case 'ru':
        return <a><img src={require('../../../assets/images/flags/ru.svg')}/> Рус</a>;
      case 'en':
        return <a><img src={require('../../../assets/images/flags/en.svg')}/> Eng</a>;
      default:
        return <a><img src={require('../../../assets/images/flags/en.svg')}/> Eng</a>;
    }
  };

  const renderMenu = () => (
    <div className={s.menu}>
      <div className={s.link}><a>{t('links.nav.blog.label')}</a></div>
      <div className={s.link}><a>{t('links.nav.faq.label')}</a></div>
      <div className={s.link} onClick={() => openResourses()}><a>{t('links.nav.downloads.label')}</a></div>
      <div className={s.link}><a>{t('links.resourses.whitepaper.label')}</a></div>
      <div className={s.link} onClick={() => openLangs()}>{getCurrentLang()}</div>
    </div>
  );

  const renderLangs = () => (
    <div className={s.menu}>
      <div className={s.link} onClick={() => selectEn()}><a><img src={require('../../../assets/images/flags/en.svg')}/>English</a></div>
      <div className={s.link} onClick={() => selectRu()}><a><img src={require('../../../assets/images/flags/ru.svg')}/>Русский</a></div>
    </div>
  );

  const renderResourses = () => (
    <div className={s.menu}>
      <div className={s.link}><a>{t('links.resourses.whitepaper.label')}</a></div>
      <div className={s.link}><a>{t('links.resourses.yellowpaper.label')}</a></div>
      <div className={s.link}><a>{t('links.resourses.bsummary.label')}</a></div>
      <div className={s.link}><a>{t('links.resourses.t&c.label')}</a></div>
      <div className={s.link}><a>{t('links.resourses.disclaimer.label')}</a></div>
      <div className={s.link}><a>{t('links.resourses.privacy.label')}</a></div>
    </div>
  );

  const currentView = () => {
    switch (view) {
      case 'nav':
        return renderMenu();
      case 'langs':
        return renderLangs();
      case 'resourses':
        return renderResourses();
      default:
        return renderMenu();
    }
  };

  return (
    <Popup
      open={open}
      close={() => closeNavigation()}>
      {currentView()}
    </Popup>
  );
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
