import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { addToWishlist} from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';
import axios from 'axios';

const CheckAuth = (props) => {
    const {children} = props
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');

    const chkAuth = async () => {
        try{
            const res =  await axios.post(
                `${import.meta.env.VITE_BASE_URL}/client/api/chkauth`,
                {
                    token
                },
                {withCredentials:true}
            );

            const userData = {status: res.data.status, message: res.data.message, user: res.data.user};
            const userWishlist = res.data.myWishList;
            const userCart = res.data.myCart;

            if(res.data.status){
                dispatch(addUser(userData));
                userWishlist.map((uw) => dispatch(addToWishlist(uw)));
                userCart.map((uc) => {
                        const cartItem = {
                            _id: uc._id,
                            productId: uc.productId._id,
                            itemQuantity: uc.itemQuantity,
                            userId: uc.userId,
                            productCode: uc.productId.productCode,
                            productName: uc.productId.productName,
                            productPhoto: uc.productId.productPhoto,
                            productPrice: uc.productId.productPrice,
                            productType: uc.productId.typeId.typeName,
                        };

                        dispatch(addToCart(cartItem));
                    });
            }

        }catch(err){
            console.log(err)
        }
    }

    if(token){
        chkAuth()
    }else{
        dispatch(addUser({status:false}))
    }
    return <>
    {children}
    </>
}

export default CheckAuth;