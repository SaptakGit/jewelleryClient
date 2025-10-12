import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import WishListRow from './WishListRow';

const WishList = () => {
  const [ userWishList, setUserWishList ] = useState([]);
  const user = useSelector((state) => state.user);

  const myWishlist = async (user) => {
    const params = {}
    params.userId = user?.user?.id;
    try{
      const getWishList = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/mywishlist`,
        { 
          params
        }
      );
      setUserWishList(getWishList.data);
    }catch(err){
      setUserWishList([]);
    }
  };

  useEffect(() => {
    myWishlist(user);
  },[user])

  return (
    <div className="p-6 bg-base-100 ">
      <div className="max-w-7xl mx-auto bg-base-300 rounded-lg">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start py-5 px-5">

            <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">YOUR WISHLIST <span className="text-sm font-normal">{userWishList?.myWishlist?.length} ITEM</span></h1>
            <div className="divider"></div>
            
              {userWishList?.myWishlist?.map((wList) => <WishListRow key={wList._id} myWish={wList}/>) }

            <div className="mt-6">
              <p className="mt-2 flex items-center text-sm">
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WishList