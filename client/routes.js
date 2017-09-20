'use strict';

import About from './containers/About';
import Home from './containers/Home';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: true,
    component: About
  }
];
