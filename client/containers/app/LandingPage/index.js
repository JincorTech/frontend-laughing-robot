import React from 'react';

import BodyClassName from 'react-body-classname';
import LandingSection from '../../../components/landingPage/LandingSection';
import AboutSection from '../../../components/landingPage/AboutSection/';
import UseCases from '../../../components/landingPage/UseCases';
import CrowdsaleSection from '../../../components/landingPage/CrowdsaleSection';
import JoinCommunity from '../../../components/landingPage/JoinCommunity';
import Footer from '../../../components/landingPage/Footer';

const LandingPage = () => (
  // if any popup is open set popupOpened class to body
  <BodyClassName className="">
    <div>
      <LandingSection/>
      <AboutSection/>
      <UseCases/>
      <CrowdsaleSection/>
      <JoinCommunity/>
      <Footer/>
    </div>
  </BodyClassName>
);

export default LandingPage;
