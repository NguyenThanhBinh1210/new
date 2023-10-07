import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Contact from './pages/Contact'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    )
  },
  {
    path: '/intro',
    element: (
      <HomeLayout>
        <Intro />
      </HomeLayout>
    )
  },
  {
    path: '/contact',
    element: (
      <HomeLayout>
        <Contact />
      </HomeLayout>
    )
  }
])
export default router
