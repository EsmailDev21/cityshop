import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "../../types/Product";

// Define a type for the slice state
interface ProductsState {
  products: Product[];
  productValue: Product;
  loading: boolean;
  error: Error;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  error: null,
  loading: false,
  productValue: null,
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProducts: (state, action: PayloadAction<Product[]>) => {
       state.products = [...action.payload];
    },
    setProduct: (state, action: PayloadAction<Product>) => {
      state.productValue = action.payload;
    },
    clearProduct: (state) => {
      state.productValue = null;
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
  addProduct,
  removeProduct,
  setProducts,
  clearProduct,
  setError,
  setLoading,
  setProduct,
} = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getProducts = (state: RootState) => state.products.products;
export const getProductsError = (state: RootState) => state.products.error;
export const getProductLoading = (state: RootState) => state.products.loading;
export const getProductValue = (state: RootState) =>
  state.products.productValue;

export default productsSlice.reducer;
