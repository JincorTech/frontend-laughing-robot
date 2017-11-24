'use strict';

import LandingPage from './containers/app/LandingPage';
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
    path: '*',
    component: ErrorPage
  }
];

export default dupeRoutes(routes);
