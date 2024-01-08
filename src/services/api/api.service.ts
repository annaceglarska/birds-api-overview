import axios from "axios";
import {
  DateConfig,
  Top100ProductDTO,
  RecentNotableObservationsInRegionDTO,
} from "./api.types";

// ToDo: authorization

const apiServiceDefinition = () => {
  const baseURL = "https://api.ebird.org/v2";

  const fetchTop100Product = async (
    dateConfig: DateConfig,
    regionCode: string
  ): Promise<Top100ProductDTO> => {
    try {
      const response = await axios.get(
        `${baseURL}/product/top100/${regionCode}/${dateConfig.year}/${dateConfig.month}/${dateConfig.day}`,
        {
          headers: {
            "x-ebirdapitoken": process.env.REACT_APP_EBIRD_API_KEY || "",
          },
        }
      );
      const data: Top100ProductDTO = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const fetchRecentNotableObservationsInRegion = async (
    regionCode: string
  ): Promise<RecentNotableObservationsInRegionDTO> => {
    try {
      const response = await axios.get(
        `${baseURL}/data/obs/${regionCode}/recent/notable`,
        {
          headers: {
            "x-ebirdapitoken": process.env.REACT_APP_EBIRD_API_KEY || "",
          },
        }
      );
      const data: RecentNotableObservationsInRegionDTO = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return {
    fetchTop100Product,
    fetchRecentNotableObservationsInRegion,
  };
};

export const apiService = apiServiceDefinition();
