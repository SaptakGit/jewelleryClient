import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer:{
        user: userReducer,
        wishlist: wishlistReducer,
        cart: cartReducer
    }
})

export default appStore;