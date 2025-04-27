import { configureStore, createSlice } from "@reduxjs/toolkit";
import Product from '../../container/product/Product'

const initialState = {
    products: [],
    loading: false,
    error: null,
    searchTerm: "",
    count: 0,
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
        },
        setSearchTerm : (state, action) => {
            state.searchTerm = action.payload
        },
        setCounter : (state) => {
            state.count += 1
        }
    }
});

export const {fetchProductRequest, fetchProductSuccess, fetchProductFailure, setSearchTerm, setCounter} = productSlice.actions;

export default productSlice.reducer;