import React from 'react';
import CartListRow from './CartListRow';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const CartList = () => {
  const userCart = useSelector((state) => state.cart);

  return (
    <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">YOUR BAG <span className="text-sm font-normal">{userCart.length} ITEM</span></h1>
            <div className="divider"></div>
            {userCart?.map((cart) =>  <CartListRow key={cart._id} cartItem={cart} />)}
            <div className="mt-6">
              <p className="mt-2 flex items-center text-sm">
                <span className="mr-2">🚚</span> Free Shipping, Free Returns
                <span className="ml-1">❓</span>
              </p>
            </div>
          </div>
  )
}

export default CartList