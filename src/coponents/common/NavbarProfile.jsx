import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../store/userSlice';
import { clearWishlist } from '../../store/wishlistSlice';
import { clearCart } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import { DEMO_USER_IMG } from '../../utlis/constant';
const BASE_URL = import.meta.env.VITE_BASE_URL;


const NavbarProfile = () => {

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch()
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleLogout = () => {
    try{
      localStorage.removeItem('token');
      setShowToast(true);
      setToastMsg('Logged out Successfully!!'); 
      setTimeout(() => {
        dispatch(clearWishlist());
        dispatch(clearCart());
        dispatch(removeUser());
        setShowToast(false);
      }, 2000);
    } catch(err){
      console.log(err.message);
    }
  }

  let profilePhoto = '';
  const userPhoto = user.user.photo;

  if(userPhoto){
    profilePhoto = `${BASE_URL}/${userPhoto}`;
  } else {
    profilePhoto = `${BASE_URL}/${DEMO_USER_IMG}`;
  }

  return (
        <>
        {/* ✅ Toast */}
          {showToast && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999]">
              <div className="toast toast-top toast-center">
                <div className="alert alert-success shadow-lg">
                  <span>{toastMsg}</span>
                </div>
              </div>
            </div>
          )}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Image" src={profilePhoto} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to='/profile' className="justify-between"> Profile
                <span className="badge">{user.user.name}</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li><Link to='/wishlist'>Wishlist</Link></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
        </>
  )
}

export default NavbarProfile