import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { RootState } from "../../app/store";

export interface ConfigState {
  region: string;
  date: string | null;
}

const initialState: ConfigState = {
  region: "PL",
  date: dayjs().toISOString(),
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
  },
});

//! Actions
export const { setDate, setRegion } = configSlice.actions;

//! Selectors
export const selectRegion = (state: RootState) => state.config.region;
export const selectDate = (state: RootState) => state.config.date;
export default configSlice.reducer;
