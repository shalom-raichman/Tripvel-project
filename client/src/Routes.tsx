import { createBrowserRouter } from 'react-router'
import Settings from './pages/settings/Settings'
import Variables from './pages/variables/Variables'
import Dashboard from './pages/dashboard/Dashboard'
import Consts from './pages/consts/Consts'

const routes = createBrowserRouter([
  {
    path: 'settings',
    element: <Settings />,
  },
  {
    path: 'varibles',
    element: <Variables />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'consts',
    element: <Consts />,
  },
])

export default routes
