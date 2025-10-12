const CategoryCard = ({catrgoryItem}) => {
    const BASE_URL = import.meta.env.VITE_IMG_URL;
    return (
        
        <div className="bg-base-200 rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto">
            <div className="relative">
                <img src={`${BASE_URL}/${catrgoryItem.categoryPhoto}`} alt={catrgoryItem.categoryName} className="w-full h-80 object-cover"/>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <p className="font-semibold text-sm">{catrgoryItem.categoryName}</p>
                    <p className="text-sm"></p>
                </div>
            </div>
        </div>
    )
}


export default CategoryCard
