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
  {
    path: '/date',
    component: lazy(() =>
      import(/* webpackPrefetch: true */ '../pages/DatePicker')
    ),
    exact: true,
    isPrivate: false,
  },
  {
    path: '/hospital',
    component: lazy(() =>
      import(/* webpackPrefetch: true */ '../pages/Hospital')
    ),
    exact: true,
    isPrivate: false,
  },
];

export default routes;
