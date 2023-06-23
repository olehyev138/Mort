import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts';
import ArchivePage from '../pages/archive';
import TeamsPage from '../pages/teams';
import NotificationPage from '../pages/notifications';
import IntegrationPage from '../pages/integrations';
import MiddlePage from '../pages/middle';
// pages
import Home from '../pages/home';
import SettingsPage from '../pages/settings';
import InnerSideBarMobileForSettingsPage from '../pages/settings/components/innerSideBarMobile';
import { useTheme, useMediaQuery } from '@mui/material';
import ProtectedRoute from './protectedRoute';

const Router = () => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const router = createBrowserRouter([
    {
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" replace />, index: true },
        {
          path: 'home',
          element: <ProtectedRoute Component={Home} />
        },
        {
          path: 'home/:header',
          element: <ProtectedRoute Component={Home} />
        },
        {
            path: 'account',
            element: <ProtectedRoute Component={SettingsPage} />
        },
        {
            path: 'archive',
            element: <ProtectedRoute Component={ArchivePage} />
        },
        {
          path: 'settings',
          element: (smDown ? <ProtectedRoute Component={InnerSideBarMobileForSettingsPage} /> : <Navigate to="/account" replace />),
          index: true
        },
        {
          path: 'teams',
          element: <ProtectedRoute Component={TeamsPage} />
        },
        {
          path: 'notification',
          element: <ProtectedRoute Component={NotificationPage} />
        },
        {
          path: 'integration',
          element: <ProtectedRoute Component={IntegrationPage} />
        },
        {
          path: 'middle',
          element: <MiddlePage />
        },
      ],
    }]);

  return <RouterProvider router={router} />;
};

export default Router;
