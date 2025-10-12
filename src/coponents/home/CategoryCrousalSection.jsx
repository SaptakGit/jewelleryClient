import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom'
import ProductShimmer from '../../utlis/ProductShimmer';

const CategoryCrousalSection = ({headerCaption, catrgories = [], loader}) => {
    return(
        <section className="py-10 px-16">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{headerCaption}</h2>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={5}
                slidesPerView={1.2}
                breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
                1280: { slidesPerView: 5 },
                }}
                className="pb-5"
            >
                {loader ? (
                // Render multiple shimmer cards while loading
                Array(4).fill(0).map((_, idx) => (
                    <SwiperSlide  key={idx}><ProductShimmer /></SwiperSlide>
                ))
              ) : (catrgories.map((catrgory) => (
                <SwiperSlide key={catrgory._id}>
                    <Link to={`/products?category=${catrgory._id}`}><CategoryCard catrgoryItem={catrgory}/></Link>
                </SwiperSlide>
                )))}
            </Swiper>
        </section>
    )
}

export default CategoryCrousalSection
