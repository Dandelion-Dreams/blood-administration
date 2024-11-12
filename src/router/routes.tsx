/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import {
  loginModuleName,
  mainLayoutModuleName,
} from './config';

const Login = lazy(() => import('@/pages/login/index.tsx'));
const MainLayout = lazy(() => import('@/pages/main'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${loginModuleName}`} />,
      },
      {
        path: loginModuleName,
        id: '登录',
        element: <Login />,
      },
      {
        path: mainLayoutModuleName,
        element: (
            <MainLayout />
        ),
        children: [
        ],
      },
    ],
  },
];

export default routes;
