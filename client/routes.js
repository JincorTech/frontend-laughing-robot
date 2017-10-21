'use strict';

import LandingPage from './containers/app/LandingPage';
import WhitePaper from './containers/app/WhitePaper';
import BusinessSummary from './containers/app/BusinessSummary';
import PrivacyPolicy from './containers/app/PrivacyPolicy';
import TermsOfUse from './containers/app/TermsOfUse';
import ErrorPage from './components/common/ErrorPage';
import Faq from './components/faq/Faq';
import Video from './components/video/Video';

const dupeRoutes = (routes) => {
  return routes.reduce((acc, route) => {
    const empty = { ...route, path: `/${route.path}` };
    const ru = { ...route, path: `/ru/${route.path}` };
    const en = { ...route, path: `/en/${route.path}` };
    return acc.concat(empty, en, ru);
  }, []);
};

const routes = [
  {
    path: '',
    exact: true,
    component: LandingPage
  },
  {
    path: 'faq',
    exact: true,
    component: Faq
  },
  {
    path: 'video',
    exact: true,
    component: Video
  },
  {
    path: 'whitepaper',
    exact: true,
    component: WhitePaper
  },
  {
    path: 'agreement',
    exact: true,
    component: TermsOfUse
  },
  {
    path: 'business-summary',
    exact: true,
    component: BusinessSummary
  },
  {
    path: 'privacy-policy',
    exact: true,
    component: PrivacyPolicy
  },
  {
    path: '*',
    component: ErrorPage
  }
];

export default dupeRoutes(routes);
