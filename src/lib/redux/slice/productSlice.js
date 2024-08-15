import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../../app/assets/Data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: productData || [],
    isLoading: false,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.productCode !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
