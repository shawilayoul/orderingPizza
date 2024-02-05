import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseCartQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseCartQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deleteCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;