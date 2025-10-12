import React from 'react'
import ToggleTheme from './ToggleTheme'
import { Link } from 'react-router-dom'
import logo from '../../assets/SJ-Logo.png'
import NavbarCart from './NavbarCart'
import NavbarProfile from './NavbarProfile'
import NavbarLogin from './NavbarLogin'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user = useSelector((store) => store.user)

  return (
    <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
        </div>
          <div className="flex-1 w-3">
            <Link to='/' className="normal-case text-xl"><img src={logo} alt='logo' className='h-16'/> </Link>
          </div> 
          <div className="flex-none">
            <ToggleTheme />
            {user && user.status ? 
            (<><NavbarCart /> <NavbarProfile /></>) : (<NavbarLogin />)}
          </div>
      </nav>
  )
}

export default Navbar