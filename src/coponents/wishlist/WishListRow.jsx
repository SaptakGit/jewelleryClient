import React from 'react';
const BASE_URL = import.meta.env.VITE_IMG_URL;

const WishListRow = ({myWish}) => {
    console.log(myWish);
    const { _id, productId, userId } = myWish;
    return (
        <div className="flex flex-col md:flex-row gap-4 border-b pb-4">
              <img src={`${BASE_URL}/${productId.productPhoto}`} alt={productId.productName} className="w-32 h-32 object-cover" />
              <div className="flex-1 space-y-1">
                <h2 className="font-semibold text-lg">{productId.productName}</h2>
                <p>Gender: Women's Jewellary</p>
                <p>Code: <h4 className='btn btn-active btn-secondary btn-sm ml-2'>{productId.productCode}</h4></p>
                <p>Type: {productId.typeId.typeName} <span className="text-green-600">In Stock ✓</span></p>
                <div className="flex gap-4 text-sm text-gray-600 underline mt-1">
                  <a href="#">Remove From Wishlist</a>
                </div>
              </div>
              <div className="flex items-center"> Price
                <span className="ml-4 font-semibold">
                  {productId.productPrice.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                      style: 'currency',
                      currency: 'INR'
                    })}
                </span>
              </div>
            </div>
    )
}
export default WishListRow