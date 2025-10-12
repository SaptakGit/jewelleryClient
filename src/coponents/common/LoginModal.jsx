import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/userSlice';
import { addToWishlist} from '../../store/wishlistSlice';
import { addToCart } from '../../store/cartSlice'; 

const LoginModal = ({ onClose }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const dispatch = useDispatch()
    const [ userName, setUserName ] = useState('')
    const [ userPhone, setUserPhone ] = useState('')
    const [ userAddress, setUserAddress ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const [ error, setError ] = useState('')
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown); 
    }, [onClose]);

    const handleLogin = async () => {
        try{
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/client/api/login`, {
                userEmail,
                userPassword
            }, {withCredentials:true});
            if(res.data.status){
                localStorage.setItem('token', res.data.token);

                const userData = {status: res.data.status, message: res.data.message, user: res.data.user};
                const userWishlist = res.data.myWishList;
                const userCart = res.data.myCart;

                setToastMsg(res.data.message);
                setShowToast(true);
                setTimeout(() => {
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
                    
                    setShowToast(false);
                }, 3000);
            }else{
                setError(res.data.message);
                return false
            }
        } catch(err){
            setError(err.message);
            
        }
    }

    const handleSignup = async () => {
        try{
            const res =  await axios.post(
                `${import.meta.env.VITE_BASE_URL}/client/api/register`,
                {
                    userName, 
                    userPhone,
                    userAddress,
                    userEmail,
                    userPassword
                },
                {withCredentials:true}
            );

            if(res.data.status){
                localStorage.setItem('token', res.data.token);
                setShowToast(true);
                setToastMsg(res.data.message);
                setTimeout(() => {
                    dispatch(addUser(res.data));
                    setShowToast(false);
                }, 3000);
                //onClose();
            }else{
                setError(res.data.message);
                return false
            }
        } catch(err){
            setError(err.message);
        }
    }

    return (
        <>
            {/* ✅ Toast */}
            {showToast && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999]">
                    <div className="toast toast-top toast-center">
                        <div className="alert alert-success shadow-lg">
                            <span>{toastMsg}</span>
                        </div>
                    </div>
                </div>
            )}
            {/* 🔒 Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-base-100 text-base-content rounded-lg shadow-xl w-full max-w-sm p-6 relative">
                    <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={onClose}>✕</button>

                    <h3 className="text-lg font-bold mb-4 text-center">{isLoginForm ? "Login to Your Account" : "Create Your Account"}</h3>

                    <form className="space-y-4">
                    {!isLoginForm && <><input type="text" placeholder="Name" className="input input-bordered w-full" value={userName} onChange={(e)=> setUserName(e.target.value)} required />
                    <input type="text" placeholder="Phone" className="input input-bordered w-full" value={userPhone} onChange={(e)=> setUserPhone(e.target.value) } required />
                    <textarea placeholder="Address" className="input input-bordered w-full" value={userAddress} onChange={(e)=> setUserAddress(e.target.value)} required ></textarea></>}
                    <input type="email" placeholder="Email" className="input input-bordered w-full" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" className="input input-bordered w-full" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} required />
                    <button type="button" className="btn btn-primary w-full" onClick={isLoginForm ?  handleLogin : handleSignup}> {isLoginForm ? "Login" : "Sign up"}</button>
                    </form>
                    <p className='text-red-500'>{error}</p>
                    <p className="text-center text-sm mt-4" onClick={() => setIsLoginForm((value) => !value)}>
                        
                    {isLoginForm ? (<span className='cursor-pointer'>New User? <span className='text-orange-600'>Register here</span></span>) : (<span className='cursor-pointer'>Existing User? <span className='text-yellow-600'>Login here</span></span>) }
                    </p>
                </div>
            </div>
            
        </>
    );
};

export default LoginModal;
