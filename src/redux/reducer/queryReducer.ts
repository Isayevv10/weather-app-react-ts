import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITemp } from "../../types/weather";

const querySlice = createSlice({
  name: "query",
  initialState: {} as ITemp,
  reducers: {
    getWeather: (state, action: PayloadAction<ITemp>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { getWeather } = querySlice.actions;
export const queryReducer = querySlice.reducer;
