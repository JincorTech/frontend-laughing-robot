import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { UserAgent } from '@quentin-sommer/react-useragent';

import Scroll from 'react-scroll';
import BodyClassName from 'react-body-classname';
import HelmetBase from '../../../components/common/HelmetBase';
import Header from '../../../components/landingPage/Header';
import FixedMenu from '../../../components/landingPage/FixedMenu';
import MobileHeader from '../../../components/landingPage/MobileHeader';
import LandingSection from '../../../components/landingPage/LandingSection';
import Media from '../../../components/landingPage/Media';
import Resources from '../../../components/landingPage/Resources';
import AboutSection from '../../../components/landingPage/AboutSection/';
import UseCases from '../../../components/landingPage/UseCases';
import ProductCarousel from '../../../components/landingPage/ProductCarousel';
import Roadmap from '../../../components/landingPage/Roadmap';
import CrowdsaleSection from '../../../components/landingPage/CrowdsaleSection';
import Distribution from '../../../components/landingPage/Distribution';
import Team from '../../../components/landingPage/Team';
import Advisors from '../../../components/landingPage/Advisors';
import JoinCommunity from '../../../components/landingPage/JoinCommunity';
import Footer from '../../../components/landingPage/Footer';

import SubscribeWindow from '../../../components/common/SubscribeWindow';
import BetaWindow from '../../../components/common/BetaWindow';
import Notifications from '../../../components/landingPage/Notifications';
import MobileNavigation from '../../../components/common/MobileNavigation';

const LandingPage = (props) => {
  const { t, isBetaOpen, isSubscribeOpen, isMobileNavOpen } = props;

  const isAnyPopupOpen = () => isBetaOpen || isSubscribeOpen || isMobileNavOpen;

  return (
    // if any popup is open set popupOpened class to body
    <BodyClassName className={ isAnyPopupOpen() ? 'popupOpened' : 'popupClosed' }>
      <div>
        <HelmetBase>
          <title>{t('head.title')}</title>
          <meta name="description" content={t('head.description')} />
        </HelmetBase>
        <UserAgent computer><Header/></UserAgent>
        <UserAgent mobile><MobileHeader/></UserAgent>
        <FixedMenu/>
        <LandingSection/>
        <Media/>
        <Resources/>
        <Scroll.Element name="aboutSection"><AboutSection/></Scroll.Element>
        <Scroll.Element name="casesSection"><UseCases/></Scroll.Element>
        <ProductCarousel/>
        <Roadmap/>
        <Scroll.Element name="crowdsaleSection"><CrowdsaleSection/></Scroll.Element>
        <Distribution/>
        <Scroll.Element name="teamSection"><Team/></Scroll.Element>
        <Scroll.Element name="advisorsSection"><Advisors/></Scroll.Element>
        <JoinCommunity/>
        <Footer/>

        <SubscribeWindow/>
        <BetaWindow/>
        <Notifications/>
        <UserAgent mobile><MobileNavigation/></UserAgent>
      </div>
    </BodyClassName>
  );
};

const TranslatedComponent = translate()(LandingPage);
export default connect(
  (state) => ({
    isBetaOpen: state.common.beta.open,
    isSubscribeOpen: state.common.subscribe.open,
    isMobileNavOpen: state.common.mobileNavigation.open
  })
)(TranslatedComponent);
