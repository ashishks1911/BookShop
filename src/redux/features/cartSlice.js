import { createSlice } from '@reduxjs/toolkit'
import { startTransition } from 'react';
import Swal from 'sweetalert2'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
      if (!existingItem) {
        state.cartItems.push(action.payload);
        // alert("Item added Successfully.");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book has been added to Cart",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else {
        Swal.fire({
          title: "Book Already Added to the Cart",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        });
      }
    },

    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id);
    },

    clearCart: (state) => {
      state.cartItems = []
    }

  }
})

//export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;