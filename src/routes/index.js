import { lazy } from 'react';
const routes = [
  {
    path: '/',
    component: lazy(() => import(/* webpackPrefetch: true */ '../pages/Home')),
    exact: true,
    isPrivate: false,
  },
  {
    path: '/about',
    component: lazy(() => import(/* webpackPrefetch: true */ '../pages/About')),
    exact: true,
    isPrivate: false,
  },
];

export default routes;