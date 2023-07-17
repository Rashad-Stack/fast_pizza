import cartReducer from "@/features/cart/cartSlice";
import userReducer from "@/features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  devTools: import.meta.env.DEV,
});

export default store;
