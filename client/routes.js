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
    const es = { ...route, path: `/es/${route.path}` };
    const it = { ...route, path: `/it/${route.path}` };
    const zh = { ...route, path: `/zh/${route.path}` };
    const hi = { ...route, path: `/hi/${route.path}` };
    const ja = { ...route, path: `/ja/${route.path}` };
    const pl = { ...route, path: `/pl/${route.path}` };
    const pt = { ...route, path: `/pt/${route.path}` };
    const ro = { ...route, path: `/ro/${route.path}` };
    const ko = { ...route, path: `/ko/${route.path}` };
    return acc.concat(empty, en, ru, es, it, zh, hi, ja, pl, pt, ro, ko);
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
