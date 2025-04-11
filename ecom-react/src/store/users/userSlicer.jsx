import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name : 'users',
    initialState : {
        userInfo : {},
        token : null,
        loading : false,
        error : null,
    },
    reducers : {
        loginRequest : (state, action) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess : (state, action) => {
            state.loading = false;
            state.userInfo = action.payload.userInfo;
            state.token = action.payload.token;
        },
        loginFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout : (state) => {
            state.loading = false;
            state.token = null;
            state.userInfo = null;
        },
    },
})

export {loginRequest, loginSuccess, loginFailure, logout} from userSlicer.actions;

export default userSlicer.reducer