import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name : 'users',
    initialState : {
        userInfo : null,
        token : null,
        loading : false,
        error : null,
        isAuthenticated: false
    },
    reducers : {
        
        loginRequest : (state) => {
            state.loading = true;
            state.error = null;
        },  
        loginSuccess : (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        loginFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchUserSuccess: (state, action) => {
            state.userInfo = action.payload;
        },
        logout : (state) => {
            state.userInfo = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
})

export const {loginRequest, loginSuccess, loginFailure, fetchUserSuccess, logout} = userSlicer.actions;

export default userSlicer.reducer;