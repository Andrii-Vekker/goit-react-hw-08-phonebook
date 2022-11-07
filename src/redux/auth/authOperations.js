import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "API/ApiAuth";

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