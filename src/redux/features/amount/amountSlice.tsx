import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface AmountState {
  value: number;
}

const initialState: AmountState = {
  value: 0,
};

export const fetchInitialAmount = createAsyncThunk(
  "amount/fetchInitialAmount",
  async () => {
    const userLocalItem = localStorage.getItem("user:data");
    if (!userLocalItem) {
      return 0;
    }
    const userData = JSON.parse(userLocalItem);
    console.log("info")
    return userData.walletAmount ? Number(userData.walletAmount) : 0;
  }
);

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      console.log(state.value, action);
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialAmount.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { increment, decrement, set } = amountSlice.actions;

export const selectAmount = (state: RootState) => state.amount.value;

export default amountSlice.reducer;
