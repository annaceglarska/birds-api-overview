import { DateConfig } from "../../services/api/api.types";

export interface DataContainer<T> {
  status: DataLoadingStatus;
  value: T;
}
export type DataLoadingStatus = "ready" | "pending" | "failed";

export interface FetchTop100ProductParams {
  dateConfig: DateConfig;
  regionCode: string;
}
