'use strict';

import LandingPage from './containers/app/LandingPage';
import WhitePaper from './containers/app/WhitePaper';
import TechPaper from './containers/app/TechPaper';
import BusinessSummary from './containers/app/BusinessSummary';
import PrivacyPolicy from './containers/app/PrivacyPolicy';
import TermsOfUse from './containers/app/TermsOfUse';
import BrandResources from './containers/app/BrandResources';
import ErrorPage from './components/common/ErrorPage';
import Faq from './components/faq/Faq';
import Video from './components/video/Video';
import Cases from './components/cases/Cases';

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
    path: 'cases',
    exact: true,
    component: Cases
  },
  {
    path: 'whitepaper',
    exact: true,
    component: WhitePaper
  },
  {
    path: 'technical-paper',
    exact: true,
    component: TechPaper
  },
  {
    path: 'brand-resources',
    exact: true,
    component: BrandResources
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
