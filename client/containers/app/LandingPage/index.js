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
import LandingSection from '../../../components/landingPage/LandingSectionAlt';
import Media from '../../../components/landingPage/Media';
import Resources from '../../../components/landingPage/Resources';
import AboutSection from '../../../components/landingPage/AboutSection/';
import UseCases from '../../../components/landingPage/UseCases';
import ProductCarousel from '../../../components/landingPage/ProductCarousel';
import Roadmap from '../../../components/landingPage/Roadmap';
import CrowdsaleSection from '../../../components/landingPage/CrowdsaleSection';
import Distribution from '../../../components/landingPage/Distribution';
import Legal from '../../../components/landingPage/Legal';
import Team from '../../../components/landingPage/Team';
import Advisors from '../../../components/landingPage/Advisors';
import JoinCommunity from '../../../components/landingPage/JoinCommunity';
import Footer from '../../../components/landingPage/Footer';

import SubscribeWindow from '../../../components/common/SubscribeWindow';
import BetaWindow from '../../../components/common/BetaWindow';
import Notifications from '../../../components/landingPage/Notifications';
import MobileNavigation from '../../../components/common/MobileNavigation';

const LandingPage = (props) => {
  const { t, location, isBetaOpen, isSubscribeOpen, isMobileNavOpen } = props;

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
        <UserAgent computer><FixedMenu utm={location.search}/></UserAgent>
        <Scroll.Element name="landingSection" id="landing"><LandingSection utm={location.search}/></Scroll.Element>
        <Scroll.Element name="mediaSection" id="media"><Media/></Scroll.Element>
        <Scroll.Element name="resourcesSection" id="resources"><Resources/></Scroll.Element>
        <Scroll.Element name="aboutSection" id="about"><AboutSection/></Scroll.Element>
        <Scroll.Element name="casesSection" id="cases"><UseCases/></Scroll.Element>
        <Scroll.Element name="productSection" id="product"><ProductCarousel/></Scroll.Element>
        <Scroll.Element name="roadmapSection" id="roadmap"><Roadmap/></Scroll.Element>
        <Scroll.Element name="crowdsaleSection" id="crowdsale"><CrowdsaleSection/></Scroll.Element>
        <Scroll.Element name="distributionSection" id="distribution"><Distribution/></Scroll.Element>
        <Scroll.Element name="legalSection" id="leagal"><Legal/></Scroll.Element>
        <Scroll.Element name="teamSection" id="team"><Team/></Scroll.Element>
        <Scroll.Element name="advisorsSection" id="advisors"><Advisors/></Scroll.Element>
        <Scroll.Element name="communitySection" id="community"><JoinCommunity/></Scroll.Element>
        <Scroll.Element name="footerSection" id="footer"><Footer/></Scroll.Element>

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
