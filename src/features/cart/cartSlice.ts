import type { Cart, CartState, RootState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: CartState, action: { payload: Cart }) {
      state.cart.push(action.payload);
    },
    deleteItem(state: CartState, action: { payload: string }) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state: CartState, action: { payload: string }) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity(state: CartState, action: { payload: string }) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
    },
    clearCart(state: CartState) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState): number =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state: RootState): number =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentQuantityById = (id: string) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
