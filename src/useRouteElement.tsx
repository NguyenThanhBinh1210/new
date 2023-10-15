import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Contact from './pages/Contact'
import DichVuKeToan from './pages/DichVuKeToan'
import BaoCaoTaiChinh from './pages/BaoCaoTaiChinh'
import DichVuThayDoiTen from './pages/DichVuThayDoiTen'
import KeToanThueTronGoi from './pages/KeToanThueTronGoi'
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
    path: '/bao-cao-tai-chinh',
    element: (
      <HomeLayout>
        <BaoCaoTaiChinh />
      </HomeLayout>
    )
  },
  {
    path: '/dich-vu-thay-doi-ten',
    element: (
      <HomeLayout>
        <DichVuThayDoiTen />
      </HomeLayout>
    )
  },
  {
    path: '/ke-toan-thue-tron-goi',
    element: (
      <HomeLayout>
        <KeToanThueTronGoi />
      </HomeLayout>
    )
  },
  {
    path: '*',
    element: <div>Loi</div>
  }
])
export default router
