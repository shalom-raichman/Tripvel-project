import { createBrowserRouter } from 'react-router'
import Settings from './pages/settings/Settings'
import Variables from './pages/variables/Variables'
import Dashboard from './pages/dashboard/Dashboard'
import Consts from './pages/consts/Consts'

export const pages = [
  {
    path: 'settings',
    element: <Settings />,
    display: 'Settings'
  },
  {
    path: '/',
    element: <Variables />,
    display: 'Varibles',
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    display: 'Dashboard'
  },
  {
    path: 'consts',
    element: <Consts />,
    display: 'Consts'
  },
]

export const routes = createBrowserRouter(pages)
