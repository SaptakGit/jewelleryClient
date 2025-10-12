import React from 'react'
import { DISCOUNT_IMG } from '../../utlis/constant'

const Discount = () => {
    return (
      <section className="mx-5 my-10">
        <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px] w-full">
          {/* Background Image */}
          <img
            src={DISCOUNT_IMG}
            alt="Discount Banner"
            className="w-full h-full object-cover"
          />
  
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start px-10">
            <div className="text-white max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                50% Off On All Trending Collections
              </h2>
              <p className="mb-4 text-sm sm:text-base">Hurry Up! Offer ends soon!</p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Discount;
  