import React from 'react';

import BodyClassName from 'react-body-classname';
import LandingSection from '../../../components/landingPage/LandingSection';
import AboutSection from '../../../components/landingPage/AboutSection/';

const LandingPage = () => (
  // if any popup is open set popupOpened class to body
  <BodyClassName className="">
    <div>
      <LandingSection/>
      <AboutSection/>
    </div>
  </BodyClassName>
);

export default LandingPage;
