import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "../../types/Product";
import { Cart, CartItem } from "../../types/Cart";

// Define a type for the slice state
interface CartState {
  cart : Cart;
  items: CartItem[];
  loading: boolean;
  error: Error;
}

// Define the initial state using that type
const initialState: CartState = {
  cart : {
    expedition:0,
    total:0,
    id:"",
    subTotal:0
  },
  items: [],
  error: null,
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.id != action.payload
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    
    clearCart: (state) => {
      state.items = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  setError,
  setLoading,
  setCart
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCartItems= (state: RootState) => state.cart.items;
export const getCart= (state: RootState) => state.cart.cart;
export const getCartError = (state: RootState) => state.cart.error;
export const getCartLoading = (state: RootState) => state.cart.loading;


export default cartSlice.reducer;
