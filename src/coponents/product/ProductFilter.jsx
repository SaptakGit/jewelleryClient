import React, { useEffect, useState } from 'react';
import useProductFilter from '../../hooks/useProductFilter';

const ProductFilter = ({ priceRange, setPriceRange, prodCategory, setProdCategory }) => {
    const { filters, loading, error } = useProductFilter();

    if (loading) return <div>Loading filters...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="card bg-base-300 rounded-box grid grow place-items-start ">
            <ul className="menu rounded-box w-56">
                <li><h3 className='font-bold text-lg'>Filter</h3></li>
                <li>
                    <details open>
                        <summary>Price Range ₹{priceRange}</summary>
                        <ul>
                            <li>
                                <input type="range" min={1000} max={200000} value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="range range-xs text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Category</summary>
                        <ul>
                            {filters?.category?.categoryList?.map((item) => (
                                <li key={item._id}> 
                                    <label className="label">{item.categoryName}
                                        <input type="checkbox" className="checkbox" value={item._id} onChange={(e) => {
                                            const value = e.target.value;
                                            if (e.target.checked) {
                                                setProdCategory((prev) => [...prev, value]);
                                            } else {
                                                setProdCategory((prev) => prev.filter(id => id !== value));
                                            }
                                        }} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Brand</summary>
                        <ul>
                            {filters?.brand?.brandList?.map((item) => (
                                <li key={item._id}> 
                                    <label className="label">{item.brandName}
                                        <input type="checkbox" className="checkbox" value={item._id} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Shape</summary>
                        <ul>
                            {filters?.shape?.shapeList?.map((item) => (
                                <li key={item._id}> 
                                    <label className="label">{item.shapeName}
                                        <input type="checkbox" className="checkbox" value={item._id} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Carat</summary>
                        <ul>
                            {filters?.carat?.caratList?.map((item) => (
                                <li key={item}> 
                                    <label className="label">{item}
                                        <input type="checkbox" className="checkbox" value={item} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Color</summary>
                        <ul>
                            {filters?.color?.colorList?.map((item) => (
                                <li key={item._id}> 
                                    <label className="label">{item.colorName}
                                        <input type="checkbox" className="checkbox" value={item._id} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Type</summary>
                        <ul>
                            {filters?.type?.typeList?.map((item) => (
                                <li key={item._id}> 
                                    <label className="label">{item.typeName}
                                        <input type="checkbox" className="checkbox" value={item._id} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Occasion</summary>
                        <ul>
                            {filters?.occasion?.occasionList?.map((item) => (
                                <li key={item._id}> 
                                    <label className="label">{item.occasionName}
                                        <input type="checkbox" className="checkbox" value={item._id} /> 
                                    </label>
                                </li>
                            )) }
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}

export default ProductFilter