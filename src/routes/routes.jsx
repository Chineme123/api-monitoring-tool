import { createBrowserRouter } from 'react-router';
import Dashboard from './dashboard';
import ManualCheck from './ManualCheck';
import Endpoints from './Endpoints';
import EndpointPage from './EndpointPage';
import Settings from './Settings';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  }, 
  {
    path: "/manual-check",
    element: <ManualCheck />,
  },
  {
    path: "/endpoints",
    element: <Endpoints />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/api-monitoring/endpoints/:controller/:endpoint",
    element: <EndpointPage />,
  },
]);
