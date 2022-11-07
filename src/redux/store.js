import { configureStore } from "@reduxjs/toolkit";
import { filterSlise } from "./filterSlise";
import contactsReducer from "./contactsSlise";
import authReducer from "./auth/authSlise"

export const store = configureStore({
    reducer: {
       auth: authReducer,
        contacts: contactsReducer,
        filter: filterSlise.reducer
    },
  });

