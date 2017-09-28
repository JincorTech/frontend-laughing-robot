import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { UserAgent } from '@quentin-sommer/react-useragent';

import BodyClassName from 'react-body-classname';
import HelmetBase from '../../../components/common/HelmetBase';
import Header from '../../../components/landingPage/Header';
import MobileHeader from '../../../components/landingPage/MobileHeader';
import LandingSection from '../../../components/landingPage/LandingSection';
import AboutSection from '../../../components/landingPage/AboutSection/';
import UseCases from '../../../components/landingPage/UseCases';
import ProductCarousel from '../../../components/landingPage/ProductCarousel';
import Roadmap from '../../../components/landingPage/Roadmap';
import CrowdsaleSection from '../../../components/landingPage/CrowdsaleSection';
import Team from '../../../components/landingPage/Team';
import Advisors from '../../../components/landingPage/Advisors';
import JoinCommunity from '../../../components/landingPage/JoinCommunity';
import Footer from '../../../components/landingPage/Footer';

import FaqPopup from '../../../components/common/FaqPopup';
import SubscribeWindow from '../../../components/common/SubscribeWindow';
import BetaWindow from '../../../components/common/BetaWindow';
import Notifications from '../../../components/landingPage/Notifications';
import MobileNavigation from '../../../components/common/MobileNavigation';

const LandingPage = (props) => {
  const { t, isFaqOpen, isBetaOpen, isSubscribeOpen, isMobileNavOpen } = props;

  const isAnyPopupOpen = () => isFaqOpen || isBetaOpen || isSubscribeOpen || isMobileNavOpen;

  return (
    // if any popup is open set popupOpened class to body
    <BodyClassName className={ isAnyPopupOpen() ? 'popupOpened' : '' }>
      <div>
        <HelmetBase>
          <title>{t('head.title')}</title>
          <meta name="description" content={t('head.description')} />
        </HelmetBase>
        <UserAgent computer><Header/></UserAgent>
        <UserAgent mobile><MobileHeader/></UserAgent>
        <LandingSection/>
        <AboutSection/>
        <UseCases/>
        <ProductCarousel/>
        <Roadmap/>
        <CrowdsaleSection/>
        <Team/>
        <Advisors/>
        <JoinCommunity/>
        <Footer/>

        <FaqPopup/>
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
    isFaqOpen: state.common.faq.open,
    isBetaOpen: state.common.beta.open,
    isSubscribeOpen: state.common.subscribe.open,
    isMobileNavOpen: state.common.mobileNavigation.open
  })
)(TranslatedComponent);