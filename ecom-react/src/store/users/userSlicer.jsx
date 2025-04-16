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
        registerRequest : (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess : (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.isAuthenticated = true;
        },
        registerFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        loginRequest : (state) => {
            state.loading = true;
            state.error = null;
        },  
        loginSuccess : (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
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

export const {registerRequest, registerSuccess, registerFailure, loginRequest, loginSuccess, loginFailure, fetchUserSuccess, logout} = userSlicer.actions;

export default userSlicer.reducer;