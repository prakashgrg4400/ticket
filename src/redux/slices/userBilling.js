import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: 0,
    email: "",
    number: 0,
    ticketName: "",
    discount: "",
    onlinePayment: false,
};

const userBillingSlice = createSlice({
    name: "billing",
    initialState,
    reducers: {
        setInitialBilling: (state, action) => {
            console.log("state ==> ", state);
            console.log("action.payload ==> ", action.payload);
            return { ...action.payload };
        },
    },
});

export const { setInitialBilling } = userBillingSlice.actions;
export default userBillingSlice.reducer;
