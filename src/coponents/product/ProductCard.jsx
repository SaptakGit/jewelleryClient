import { useState } from "react";
import useAddToCart from "../../hooks/useAddToCart";
import useWishlist from "../../hooks/useWishlist";
import { Link } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_IMG_URL;


const ProductCard = ({product}) => {
  const { toggleWishlist, inWishlist } = useWishlist();
  const { addToCart } = useAddToCart()
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  //const 

  const { _id, productName, productPhoto, categoryId, productPrice, offerPrice, productCode, productQuantity, productStatus } = product;

  const wishlisted = inWishlist(_id);

  const handleAddToWishList = () => {
    toggleWishlist(product, setToastMsg, setShowToast);
  }

  const handleAddToCart = () => {
    addToCart(product, setToastMsg, setShowToast);
  }

  return (
    <div className="bg-base-200 w-72 rounded-xl my-3 shadow-md overflow-hidden  max-w-xs mx-auto">
      <div className="relative">
        <img src={`${BASE_URL}/${productPhoto}`} alt={productName} className="w-full h-80 object-cover"/>
          { offerPrice != productPrice ? 
            <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">Sale</span> : ''}
            <button className="btn btn-circle absolute top-2 right-2 font-semibold px-2 py-1" onClick={handleAddToWishList}>
              <svg xmlns="http://www.w3.org/2000/svg" fill={wishlisted ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            </button>
            <button className="btn btn-circle absolute top-14 right-2 font-semibold px-2 py-1" onClick={handleAddToCart}>
              <svg className="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
            </button>
      </div>
        <Link to={`/productdetails?product=${product._id}`}>
          <div className="items-center justify-between px-4 py-3">
            <div className='float-left'>
              <p className="font-semibold text-sm" style={{textTransform:"capitalize"}}>{productName}</p>
              <p className="text-sm mb-2">
                <span className='font-bold'> {offerPrice != productPrice ?  
                  offerPrice.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                  })  : 
                  productPrice.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                  }) } 
                </span> 
                {offerPrice && offerPrice != productPrice ? (
                  <span className="line-through text-gray-400 text-xs ml-1">
                    {productPrice.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                      style: 'currency',
                      currency: 'INR'
                    })}
                  </span>
                ) : ''}
              </p>
            </div>
            <div className='float-right'>
              <h4 className='btn btn-active btn-secondary btn-sm'>{productCode}</h4>
            </div>
          </div>
        </Link>
        {showToast && (
          <div className="toast toast-top toast-end z-50">
            <div className="alert alert-success">
              <span>{toastMsg}</span>
            </div>
          </div>
        )}
    </div>
  )

}

export default ProductCard