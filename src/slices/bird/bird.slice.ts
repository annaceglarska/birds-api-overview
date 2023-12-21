import { createSlice } from "@reduxjs/toolkit";
import {
  RecentNotableObservationsInRegionDTO,
  Top100ProductDTO,
} from "../../services/api/api.types";
import { DataContainer } from "./bird.types";
import { RootState } from "../../app/store";
import {
  getRecentNotableObservationInRegionAsync,
  getTop100ProductAsync,
} from "./bird.api-actions";

export interface BirdState {
  top100Product: DataContainer<Top100ProductDTO>;
  recentNotableObservationInRegion: DataContainer<RecentNotableObservationsInRegionDTO>;
}

const initialState: BirdState = {
  top100Product: {
    status: "ready",
    value: [],
  },
  recentNotableObservationInRegion: {
    status: "ready",
    value: [],
  },
};

export const birdSlice = createSlice({
  name: "bird",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTop100ProductAsync.pending, (state) => {
        state.top100Product.status = "pending";
      })
      .addCase(getTop100ProductAsync.fulfilled, (state, action) => {
        state.top100Product.status = "ready";
        state.top100Product.value = action.payload;
      })
      .addCase(getTop100ProductAsync.rejected, (state) => {
        state.top100Product.status = "failed";
      })
      .addCase(getRecentNotableObservationInRegionAsync.pending, (state) => {
        state.recentNotableObservationInRegion.status = "pending";
      })
      .addCase(
        getRecentNotableObservationInRegionAsync.fulfilled,
        (state, action) => {
          state.recentNotableObservationInRegion.status = "ready";
          state.recentNotableObservationInRegion.value = action.payload;
        }
      )
      .addCase(getRecentNotableObservationInRegionAsync.rejected, (state) => {
        state.recentNotableObservationInRegion.status = "failed";
      });
  },
});

export const {} = birdSlice.actions;

//! Selectors
export const selectTop100BirdProduct = (state: RootState) =>
  state.bird.top100Product.value;
export const selectRecentNotableObservationsInRegion = (state: RootState) =>
  state.bird.recentNotableObservationInRegion.value;

export default birdSlice.reducer;
