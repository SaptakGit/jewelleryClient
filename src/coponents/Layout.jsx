import { Outlet } from 'react-router-dom'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className='page-body'>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout