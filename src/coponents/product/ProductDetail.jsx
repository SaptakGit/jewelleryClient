import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useWishlist from '../../hooks/useWishlist';
import useAddToCart from "../../hooks/useAddToCart";
const BASE_URL = import.meta.env.VITE_IMG_URL;

const ProductDetail = () => {

  const [ searchParams ] = useSearchParams();
  const [ productDetail, setProductDetail ] = useState({});
  const { toggleWishlist, inWishlist  } = useWishlist();
  const { addToCart } = useAddToCart();
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  const productId = searchParams.get('product')

  const getProductDetail = async (productId) => {
    //console.log(productId)
    try{
      const params = {}
      params.productId = productId
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/productdetail`,{
        params
      })
      if(res.data.status){
        setProductDetail(res.data.productDetail)
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getProductDetail(productId)
  },[])

  const productName = productDetail?.productName;
  const thumbnails = [productDetail?.productPhoto];
  const productPrice = productDetail?.productPrice;
  const offerPrice = productDetail?.offerPrice;
  const Color = productDetail?.colorId?.colorName;
  const Shape = productDetail?.shapeId?.shapeName;
  const Carat = productDetail?.caratSize;
  const Weight = productDetail?.productWeight;
  const Brand = productDetail?.brandId?.brandName;
  const Type = productDetail?.typeId?.typeName;
  const Occasion = productDetail?.occasionId?.occasionName;
  const productCode = productDetail?.productCode;

  const wishlisted = inWishlist(productId);

  const handleAddToWishList = () => {
    toggleWishlist(productDetail, setToastMsg, setShowToast);
  }

  const handleAddToCart = () => {
    addToCart(productDetail, setToastMsg, setShowToast);
  }
  
  return (
    <div className="container mx-auto p-10 bg-base-300 shadow-sm m-5 w-full">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Images */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2">
            {thumbnails.map((src, i) => (
              <img key={i} src={`${BASE_URL}/${src}`} className="w-16 h-20 object-cover border rounded cursor-pointer hover:ring-2 ring-primary" alt={`thumb-${i}`}/>
            ))}
          </div>
          {/* Main Image */}
          <img src={`${BASE_URL}/${thumbnails[0]}`} alt="Main Product" className="w-full max-w-md object-cover rounded-lg"/>
        </div>
        {/* Right: Product Info */}
        <div className="flex-1 space-y-4">
          <div className="flex gap-2">
            <h2 className="text-2xl font-semibold">{productName}</h2>
            <button className="btn btn-secondary">{productCode}</button>
          </div>
          <div className="text-success font-medium">Special price</div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-error">
                  {offerPrice !== undefined &&
                    productPrice !== undefined ? (
                      offerPrice !==productPrice
                        ?offerPrice.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          style: 'currency',
                          currency: 'INR'
                        })
                        :productPrice.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          style: 'currency',
                          currency: 'INR'
                        })
                      ) : (<span></span> )}
            </span>
            {offerPrice != productPrice ?  (<>
              <span className="line-through text-gray-400">₹{productDetail?.productPrice}</span>
              <span className="text-green-600">{ Math.round(((productDetail?.productPrice-productDetail?.offerPrice)/productDetail?.productPrice)*100) }% off</span>
              </>
            ) : ''}
          </div>

          <div className="flex items-center gap-2">
            <div className="badge badge-success gap-2 text-white">4.2 ★</div>
            <span className="text-sm text-gray-600">5,362 ratings and 262 reviews</span>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            {/* Left Side */}
            <div className="card bg-base-300 rounded-box grid h-full grow place-items-start p-4">
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Color:</p>
                <span>{Color}</span>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Shape:</p>
                <span>{Shape}</span>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Carat:</p>
                <span>{Carat}</span>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Weight:</p>
                <span>{Weight}</span>
              </div>
            </div>
            {/* Divider */}
            <div className="divider lg:divider-horizontal"></div>
            {/* Right Side */}
            <div className="card bg-base-300 rounded-box grid h-full grow place-items-start p-4">
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Brand:</p>
                <span>{Brand}</span>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Type:</p>
                <span>{Type}</span>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="font-medium">Occasion:</p>
                <span>{Occasion}</span>
              </div>
            </div>
          </div>
          {/* Offers */}
          <div className="space-y-1 mt-4">
            <div className="font-medium">Coupons for you</div>
            <p className="text-green-600 text-sm">
              ✅ Special Price Get extra ₹20 off on 20 items
            </p>

            <div className="font-medium mt-2">Available offers</div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>💳 5% cashback on Flipkart Axis Bank Credit Card</li>
              <li>💳 5% cashback on Axis Bank Flipkart Debit Card</li>
              <li>💳 5% off up to ₹750 on IDFC FIRST Power Women Platinum Cards</li>
              <li className="text-blue-600 cursor-pointer">+5 more offers</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-warning text-white w-1/2" onClick={handleAddToCart}><svg className="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> Add to Cart
            </button>
            <button className="btn btn-error text-white w-1/2" onClick={handleAddToWishList}><svg xmlns="http://www.w3.org/2000/svg" fill={wishlisted ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> {wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
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
export default ProductDetail
