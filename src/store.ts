import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./redux/features/amount/amountSlice";

export const store = configureStore({
  reducer: {
    amount: amountReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
