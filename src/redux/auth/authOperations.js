import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup, logOut, getCurrentUser } from "API/ApiAuth";
import { useSelector } from "react-redux";
import { isLogin } from "./authSelectors";
 
export const signupUser = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const res = await signup(data);
            return res;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            };
            return rejectWithValue(error)
        };
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
      try {
          const res = await login(data);
        return res
      } catch ({response}) {
          const error = {
              status: response.status,
              message: response.data.message
          }
          return rejectWithValue(error)
      }
    }
);

export const logOutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const res = await logOut();
            return res
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error)
        };
    }

);

export const currentUser = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
         const isLoginUser = useSelector(isLogin())
    if (!isLoginUser) {
      return
    }
        try {
            const { auth } = getState()
            const res = await getCurrentUser(auth.token);
            console.log(res)
            return res
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error)
        };
    }

);