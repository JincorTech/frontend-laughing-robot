import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import s from './styles.scss';
import i18next from '../../../utils/i18next/client';

import { isBrowser } from '../../../utils/common';

import { changeLanguage } from '../../../redux/modules/app/i18next';
import { openSubscribe } from '../../../redux/modules/common/subscribe';

import Scroll from 'react-scroll';
// import Button from '../../common/Button';
import SLink from '../../common/SLink';
import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import Dropdown from '../../common/Dropdown';

class FixedMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 500,
      scrollY: 0,
      visible: false
    };

    this._handleScrollY = this._handleScrollY.bind(this);
  }

  componentDidMount() {
    // exit if server
    if (!isBrowser()) return;

    const windowHeight = window.innerHeight;
    this.setState({ windowHeight });
    window.addEventListener('scroll', this._handleScrollY);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScrollY);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.scrollY !== nextState.scrollY) {
      const { windowHeight, scrollY } = this.state;

      if (scrollY > windowHeight) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    }
  }

  _handleScrollY() {
    const scrollY = window.scrollY;
    this.setState({ scrollY });
  }

  render() {
    const { visible } = this.state;

    const { changeLanguage, openSubscribe, location, t } = this.props;
    const { pathname } = location;
    const selectRu = () => changeLanguage({ lang: 'ru', pathname });
    const selectEn = () => changeLanguage({ lang: 'en', pathname });

    const getCurrentLang = () => {
      switch (i18next.language) {
        case 'ru':
          return <a className={s.linkInner}>Рус <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
        case 'en':
          return <a className={s.linkInner}>Eng <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
        default:
          return <a className={s.linkInner}>Eng <img src={require('../../../assets/images/common/dropdownArrow.svg')}/></a>;
      }
    };

    return (
      <div className={visible ? s.menu : s.hidden}>
        <div className={s.inner}>
          <div className={s.logo}>
            <img src={require('../../../assets/images/logo.svg')}/>
          </div>

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
                  <a className={s.ddLink} key="lang.header.ru" onClick={() => selectRu()}>Русский</a>
                ]}/>
            </div>
          </div>

          <div className={s.buttons}>
            <div className={s.contrib}>
              <a className={s.telegramButton} href={t('links.socials.telegram.href')}>
                <img src={require('../../../assets/images/common/telegramButton.svg')}/>
              </a>
              <a className={s.button} href="https://contribute.jincor.com">{t('landing.contribute')}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const WithRouterComponent = withRouter(FixedMenu);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  () => ({}),
  {
    changeLanguage,
    openSubscribe
  }
)(TranslatedComponent);
