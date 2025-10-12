import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [ deliveryCharge, setDeliveryCharge ] = useState(0)
  const checkoutCart = useSelector((state) => state.cart);
  const productTotalPrice = checkoutCart.reduce((sum, item) => sum + item.itemQuantity * item.productPrice, 0);
  const grandTotal = productTotalPrice + deliveryCharge;
  return (
    <div className="w-full lg:w-96 mt-[-48px] lg:mt-0">
            <div className="bg-base-200 p-4 rounded shadow-sm">
              <button className="btn btn-block btn-neutral text-white">CHECKOUT <span className="ml-auto">→</span></button>
              <p className="text-sm text-center my-2">
                By placing your order, you agree to the{" "}
                <a href="#" className="text-blue-500 underline">Delivery Terms</a>
              </p>

              <div className="bg-base-100 p-4 rounded border border-base-300 text-base-content">
                <h2 className="font-bold text-lg mb-2">ORDER SUMMARY:</h2>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>{checkoutCart.length} PRODUCT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product total</span>
                    <span>
                      {productTotalPrice.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-green-600 font-semibold">{deliveryCharge == 0 ? 'FREE' : deliveryCharge}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>
                      {grandTotal.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100 mt-4 border border-base-300 rounded text-base-content">
                <input type="checkbox" />
                <div className="collapse-title font-medium">PROMO CODE</div>
                <div className="collapse-content">
                  <input type="text" placeholder="Enter code" className="input input-bordered w-full" />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="font-bold text-sm">NEED HELP?</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <a href="#" className="link link-hover">Shipping</a>
                  </li>
                  <li>
                    <a href="#" className="link link-hover">Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href="#" className="link link-hover">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-sm mb-2">ACCEPTED PAYMENT METHODS</h3>
                <div className="flex gap-2 flex-wrap">
                  <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
                  <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" className="h-6" />
                  <img src="https://img.icons8.com/color/48/amex.png" alt="American Express" className="h-6" />
                  <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" className="h-6" />
                  <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6" />
                  <img src="https://img.icons8.com/ios-filled/50/apple-pay.png" alt="Apple Pay" className="h-6" />
                </div>
              </div>
            </div>
          </div>
  )
}

export default Checkout