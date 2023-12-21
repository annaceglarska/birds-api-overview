import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import birdReducer from "../slices/bird/bird.slice";
import configReducer from "../slices/config/config.slice";

export const store = configureStore({
  reducer: {
    bird: birdReducer,
    config: configReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
