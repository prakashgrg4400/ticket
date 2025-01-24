import { configureStore } from "@reduxjs/toolkit";
import userBillingReducer from "./slices/userBilling";

const store = configureStore({
    reducer: {
        userBilling: userBillingReducer,
    },
});

export default store;
