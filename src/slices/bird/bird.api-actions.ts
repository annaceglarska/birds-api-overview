import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/api/api.service";
import { FetchTop100ProductParams } from "./bird.types";

export const getTop100ProductAsync = createAsyncThunk(
  "bird/getTop100Product",
  async ({ dateConfig, regionCode }: FetchTop100ProductParams) => {
    return apiService.fetchTop100Product(dateConfig, regionCode);
  }
);

export const getRecentNotableObservationInRegionAsync = createAsyncThunk(
  "bird/getRecentNotableObservationInRegion",
  async (regionCode: string) => {
    return apiService.fetchRecentNotableObservationsInRegion(regionCode);
  }
);
