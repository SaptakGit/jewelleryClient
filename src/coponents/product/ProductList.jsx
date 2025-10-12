import { useEffect, useState } from "react";
import ProductBanner from "./ProductBanner";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import ProductFilter from "./ProductFilter";
import ProductShimmer from "../../utlis/ProductShimmer";

const ProductList = () => {

  const [ productList, setProductList ] = useState([]);
  const [ searchParams ] = useSearchParams();
  const [ loading, setLoading ] = useState(true);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [prodCategory, setProdCategory] = useState([]);

  const categoryId = searchParams.get('category')

  const getProductList = async (categoryId) => {
    try{
      const params = {}
      if(categoryId){
        params.category = categoryId
      }
      const prodList = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/productlist`,
        { params }
      );
      
      setProductList(prodList.data);
      setFilteredProducts(prodList.data.productList);

    }catch(err){
      console.log(err)
    }finally {
      setLoading(false); // Stop loading
    }
  }

  useEffect(() => {
      getProductList(categoryId);
  },[categoryId]);

  useEffect(() => {
  if (productList?.productList) {
    const filtered = productList.productList
      .filter((p) => p.productPrice >= priceRange)
      .filter((p) => {
        // if no category selected, show all
        if (prodCategory.length === 0) return true;

        // handle if p.categoryId is string or object
        const categoryId = typeof p.categoryId === 'object' ? p.categoryId._id : p.categoryId;

        return prodCategory.includes(String(categoryId));
      });
    setFilteredProducts(filtered);
  }
}, [priceRange, prodCategory]);

  return (
    <div className="m-5">
      <ProductBanner/>
      <div className="flex my-5">
        <ProductFilter priceRange={priceRange} setPriceRange={setPriceRange} prodCategory={prodCategory} setProdCategory={setProdCategory} />
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid grow place-items-center justify-center w-full">
          <div className=''>
            <div className="flex flex-wrap gap-6 justify-start px-5">
              {loading ? (
                // Render multiple shimmer cards while loading
                Array(10).fill(0).map((_, idx) => (
                  <ProductShimmer key={idx} />
                ))
              ) : 
              (filteredProducts?.map((product) => <ProductCard product={product} key={product._id} />) )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList