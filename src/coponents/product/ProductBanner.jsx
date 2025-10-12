import { PRODUCT_BANNER_IMG } from '../../utlis/constant'

const ProductBanner = () => {
  return (
     <section className="bg-[#000000] rounded-2xl items-center justify-between h-[300px] overflow-hidden">
      {/* Right Side - Image */}
      <div className="">
        <img
          src={PRODUCT_BANNER_IMG}
          alt="Women's Collection"
          className="h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  )
}

export default ProductBanner