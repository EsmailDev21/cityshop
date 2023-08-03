import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Category } from "../../types/Category";

// Define a type for the slice state
interface CategoriesState {
  categories: Category[];
  categoryValue: Category;
  loading: boolean;
  error: Error;
}

// Define the initial state using that type
const initialState: CategoriesState = {
  categories: [],
  categoryValue: null,
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories = [...state.categories, action.payload];
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter(
        (item) => item.id != action.payload
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = [...state.categories, ...action.payload];
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.categoryValue = action.payload;
    },
    clearCategory: (state) => {
      state.categoryValue = null;
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
  addCategory,
  removeCategory,
  setCategories,
  clearCategory,
  setCategory,
  setError,
  setLoading,
} = categoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCategories = (state: RootState) => state.categories.categories;
export const getCategoriesError = (state: RootState) => state.categories.error;
export const getCategoriesLoading = (state: RootState) =>
  state.categories.loading;
export const getCategoryValue = (state: RootState) =>
  state.categories.categoryValue;

export default categoriesSlice.reducer;
