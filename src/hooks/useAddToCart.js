import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

const useAddToCart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddToCart = async (product, setToastMsg, setShowToast) => {
    
    if(!user || !user.user){
        if(setToastMsg && setShowToast ){
            setToastMsg("Please log in to add items to your cart");
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
        return;
    }

    const userId = user?.user?.id;
    const productId = product._id;
    const itemQuantity = 1;
    const resCart = await axios.post(`${import.meta.env.VITE_BASE_URL}/client/api/addtocart`,{
      productId,
      itemQuantity,
      userId
    });

    //console.log(resCart.data.cartItem);

    dispatch(addToCart(resCart.data.cartItem));
    if (setToastMsg && setShowToast) {
      setToastMsg(resCart.data.message);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return { addToCart: handleAddToCart };
};

export default useAddToCart;
