import { configureStore, createSlice } from "@reduxjs/toolkit";
import Product from "../../container/product/Product";

const initialState = {
    products: [],
    loading: false,
    error: null,
}

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        fetchProductRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {fetchProductRequest, fetchProductSuccess, fetchProductFailure} = productSlice.actions;

export default productSlice.reducer;