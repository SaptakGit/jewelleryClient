import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice(
    {
        name: 'wishlist',
        initialState: [],
        reducers: {
            setWishlist: (state, action) => {
                return action.payload
            },
            addToWishlist: (state, action) => {
                const item = action.payload;
                const existingItem = state.find( product => product._id === item._id);

                if(!existingItem){
                    state.push(item);
                }
            },
            removeFromWishlist: (state, action) => {
                const index = state.findIndex(item => item._id === action.payload);
                if (index !== -1) {
                    state.splice(index, 1); // ✅ removes item from the array
                }
            },
            clearWishlist : () => {
                return [];
            }
        }
    }
)

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;