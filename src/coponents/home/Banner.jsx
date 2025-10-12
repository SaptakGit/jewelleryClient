import React from 'react'
import { BANNER_IMG } from '../../utlis/constant'

const Banner = () => {
  return (
    <section className="bg-[#b96a3d] rounded-2xl p-10 flex items-center justify-between h-[500px] overflow-hidden mx-5">
      {/* Left Side - Text */}
      <div className="max-w-xl text-white">
        <span className="inline-block bg-white text-black font-bold px-4 py-1 rounded-full mb-4 text-xs">
          GET UPTO 50% OFF SHOP NOW
        </span>
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Exclusive Women's Jewellery Collections
        </h1>
        <p className="text-lg mb-8">
          Discover stylish and exclusive jewellery for every occasion. Feel confident and look your best effortlessly.
        </p>
        <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-100">
          Shop Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="h-full">
        <img
          src={BANNER_IMG}
          alt="Women's Collection"
          className="h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  )
}

export default Banner