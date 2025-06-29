import { createBrowserRouter } from 'react-router';
import Dashboard from './Dashboard.jsx'
import ManualCheck from './ManualCheck.jsx';
import Endpoints from './Endpoints.jsx';
import EndpointPage from './EndpointPage.jsx';
import Settings from './Settings.jsx';

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
