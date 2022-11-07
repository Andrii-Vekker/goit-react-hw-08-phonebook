import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser, logOutUser } from "./authOperations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null
};

const authSlise = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signupUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [signupUser.fulfilled]: (store, { payload }) => {
            store.user = payload.user;
            store.token = payload.token;
            store.loading = false;
            store.isLogin = true
        },
        [signupUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload  
    
        },
         [loginUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [loginUser.fulfilled]: (store, { payload }) => {
            store.user = payload.user;
            store.token = payload.token;
            store.loading = false;
            store.isLogin = true
        },
        [loginUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload  
    
        },
          [logOutUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [logOutUser.fulfilled]: (store, { payload }) => {
            store.user = {};
            store.loading = false;
            store.isLogin = true
        },
        [logOutUser.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload  
    
        }
    }
});

export default authSlise.reducer
