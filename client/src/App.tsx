import { RouterProvider } from 'react-router'
import { routes } from './Routes'
import NavBar from './pages/NavBar'

const App = () => {
  return (
    <>
      <NavBar/>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
