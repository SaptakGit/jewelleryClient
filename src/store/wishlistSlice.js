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
                //console.log("Removing from wishlist:", action.payload);
                //console.log("Current state before removal:",  JSON.parse(JSON.stringify(state)));
                //const existingItem = state.find( product => product._id === action.payload);
                
                const index = state.findIndex(item => item.productId === action.payload);
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