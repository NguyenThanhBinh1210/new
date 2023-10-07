import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Contact from './pages/Contact'
import DichVuKeToan from './pages/DichVuKeToan'
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
  },
  {
    path: '/dich-vu-ke-toan',
    element: (
      <HomeLayout>
        <DichVuKeToan />
      </HomeLayout>
    )
  },
  {
    path: '*',
    element: <div>Loi</div>
  }
])
export default router
