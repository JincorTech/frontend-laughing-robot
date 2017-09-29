import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import s from './styles.scss';
import i18next from '../../../utils/i18next/client';

import { openFaq } from '../../../redux/modules/common/faq';
import { changeLanguage } from '../../../redux/modules/app/i18next';

import SLink from '../../common/SLink';
import Dropdown from '../../common/Dropdown';

const Header = (props) => {
  const { changeLanguage, openFaq, location, t } = props;
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
            <a className={s.linkInner}>{t('links.nav.blog.label')}</a>
          </div>
          <div className={s.link}>
            <a className={s.linkInner} onClick={() => openFaq()}>{t('links.nav.faq.label')}</a>
          </div>
          <div className={s.link}>
            <Dropdown
              button={<a className={s.linkInner}>{t('links.nav.downloads.label')}</a>}
              dropdown={[
                <SLink href='/whitepaper' className={s.ddLink}>{t('links.resourses.whitepaper.label')}</SLink>,
                <SLink href='/yellowpaper' className={s.ddLink}>{t('links.resourses.yellowpaper.label')}</SLink>,
                <SLink href='/business-summary' className={s.ddLink}>{t('links.resourses.bsummary.label')}</SLink>,
                <SLink href='/terms-and-conditions' className={s.ddLink}>{t('links.resourses.t&c.label')}</SLink>,
                <SLink href='/disclaimer' className={s.ddLink}>{t('links.resourses.disclaimer.label')}</SLink>,
                <SLink href='/privacy-policy' className={s.ddLink}>{t('links.resourses.privacy.label')}</SLink>
              ]}/>
          </div>
          <div className={s.link}>
            <SLink href='/whitepaper' className={s.linkInner}>{t('links.resourses.whitepaper.label')}</SLink>
          </div>
          <div className={s.link}>
            <a className={s.linkInner}>{t('links.nav.team.label')}</a>
          </div>
          <div className={s.link}>
            <Dropdown
              button={getCurrentLang()}
              dropdown={[
                <a className={s.ddLink} onClick={() => selectEn()}><img src={require('../../../assets/images/flags/en.svg')}/>English</a>,
                <a className={s.ddLink} onClick={() => selectRu()}><img src={require('../../../assets/images/flags/ru.svg')}/>Русский</a>
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
    changeLanguage,
    openFaq
  }
)(TranslatedComponent);
