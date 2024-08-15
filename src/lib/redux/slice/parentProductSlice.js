import { createSlice } from "@reduxjs/toolkit";
import { parentProductData } from "../../../app/assets/Data";

const parentProductSlice = createSlice({
  name: "parentProduct",
  initialState: {
    products: parentProductData || [],
    isLoading: false,
  },
  reducers: {
    addParentProduct(state, action) {
      state.products.push(action.payload);
    },
    removeParentProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.productCode !== action.payload
      );
    },
  },
});

export const { addParentProduct, removeParentProduct } =
  parentProductSlice.actions;

export default parentProductSlice.reducer;
