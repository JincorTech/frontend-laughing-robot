'use strict';

import About from './containers/app/About';
import LandingPage from './containers/app/LandingPage';

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
    path: 'about',
    exact: true,
    component: About
  }
];

export default dupeRoutes(routes);
