import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers : {
        addToCart: (state, action) => {
            const item = action.payload;
            //console.log(item);
            const existingItem = state.find(product => product.productId === item.productId);

           if (!existingItem) {
                state.push({ ...item });
           }else{
                existingItem.itemQuantity = item.itemQuantity
           }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item._id !== action.payload._id);
        },
        clearCart: () => {
            return [];
        } 
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;