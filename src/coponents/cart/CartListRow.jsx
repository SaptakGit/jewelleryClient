import React from 'react';
const BASE_URL = import.meta.env.VITE_IMG_URL;

const CartListRow = ({cartItem}) => {
  
  const { _id, productId, productName, productPhoto, productCode, productPrice, typeName, itemQuantity, userId } = cartItem;
  const itemPrice = productPrice*itemQuantity;
  return (
    <div className="flex flex-col md:flex-row gap-4 border-b pb-4">
              <img src={`${BASE_URL}/${productPhoto}`} alt={productName} className="w-32 h-32 object-cover" />
              <div className="flex-1 space-y-1">
                <h2 className="font-semibold text-lg">{productName}</h2>
                <p>Gender: Women's Jewellary</p>
                <p>Code:  <h4 className='btn btn-active btn-secondary btn-sm ml-2'>{productCode}</h4></p>
                <p>Type: {typeName} <span className="text-green-600">In Stock ✓</span></p>
                <div className="flex gap-4 text-sm text-gray-600 underline mt-1">
                  <a href="#">Delete</a>
                  <a href="#">Move to Wishlist</a>
                </div>
              </div>
              <div className="flex items-center"> Qty {itemQuantity}
                {/*<select className="select border border-gray-300 w-16">
                  <option>1</option>
                  <option>2</option>
                </select> */}
                <span className="ml-4 font-semibold">
                  {itemPrice.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                      style: 'currency',
                      currency: 'INR'
                    })}
                </span>
              </div>
            </div>
  )
}

export default CartListRow