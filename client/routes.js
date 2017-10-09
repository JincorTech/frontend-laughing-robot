'use strict';

import LandingPage from './containers/app/LandingPage';
import WhitePaper from './containers/app/WhitePaper';
import BusinessSummary from './containers/app/BusinessSummary';
import TermsAndConditions from './containers/app/TermsAndConditions';
import ErrorPage from './components/common/ErrorPage';
import Faq from './components/faq/Faq';

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
    path: 'whitepaper',
    exact: true,
    component: WhitePaper
  },
  {
    path: 'terms-and-conditions',
    exact: true,
    component: TermsAndConditions
  },
  {
    path: 'business-summary',
    exact: true,
    component: BusinessSummary
  },
  {
    path: '*',
    component: ErrorPage
  }
];

export default dupeRoutes(routes);
