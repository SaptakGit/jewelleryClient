import React from 'react';
import CartList from './CartList';
import Checkout from './Checkout';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const MyCart = () => {

  //const [ userCart, setUserCart ] = useState([]);
    /*const user = useSelector((state) => state.user);
  
    const getCart = async (user) => {
      const params = {}
      params.userId = user?.user?.id;
      try{
        const resCart = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/mycart`,
          {
            params
          }
        );
  
       // setUserCart(resCart.data);
  
      }catch(err){
        console.log(err);
        //setUserCart([]);
      }
    }
  
    useEffect(() => {
      getCart(user);
    },[user]);*/

  return (
    <div className="p-6 bg-base-100 ">
      <div className="max-w-7xl mx-auto bg-base-300 rounded-lg">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start py-5 px-5">
          {/* LEFT: Cart Items */}
          <CartList />

          {/* RIGHT: Checkout Summary */}
          <Checkout />
        </div>
      </div>
    </div>
  )
}

export default MyCart