import Footer from '~/components/Footer'
import Header from '~/components/Header'

interface Props {
  children: React.ReactNode
}
const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className='h-1 bg-gray-200'></div>
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
