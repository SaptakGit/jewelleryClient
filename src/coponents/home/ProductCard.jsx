const ProductCard = ({productItem}) => {
    const BASE_URL = import.meta.env.VITE_IMG_URL;
    return (
        <div className="bg-base-200 rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto">
            <div className="relative">
                <img src={`${BASE_URL}/${productItem.productPhoto}`} alt={productItem.productName} className="w-full h-80 object-cover"/>
                { productItem.offerPrice != productItem.productPrice ? 
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                        Sale
                    </span> : ''
                }
            </div>
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <p className="font-semibold text-sm">{productItem.productName}</p>
                    <p className="text-sm">
                        {productItem.offerPrice != productItem.productPrice ? productItem.offerPrice : productItem.productPrice}{' '}
                        {productItem.offerPrice && productItem.offerPrice != productItem.productPrice ? (
                        <span className="line-through text-gray-400 ml-2 text-xs">
                            {productItem.productPrice}
                        </span>
                        ) : ''}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
