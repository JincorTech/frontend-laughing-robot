import React from 'react';
import { connect } from 'react-redux';

import BodyClassName from 'react-body-classname';
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

const LandingPage = (props) => {
  const { isFaqOpen, isBetaOpen, isSubscribeOpen } = props;

  const isAnyPopupOpen = () => isFaqOpen || isBetaOpen || isSubscribeOpen;

  return (
    // if any popup is open set popupOpened class to body
    <BodyClassName className={ isAnyPopupOpen() ? 'popupOpened' : '' }>
      <div>
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
      </div>
    </BodyClassName>
  );
};

export default connect(
  (state) => ({
    isFaqOpen: state.common.faq.open,
    isBetaOpen: state.common.beta.open,
    isSubscribeOpen: state.common.subscribe.open
  })
)(LandingPage);
