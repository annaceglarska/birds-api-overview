import { DateConfig, Top100ProductDTO, RecentNotableObservationsInRegionDTO } from "./api.types";

// ToDo: change fetch to axios
// ToDo: authorization 

const apiServiceDefinition = () => {
  const baseURL = "https://api.ebird.org/v2";
  const defaultRegion = 'PL'

  const fetchTop100Product = async (dateConfig: DateConfig, regionCode: string = defaultRegion): Promise<Top100ProductDTO> => {
    try {
      const response = await fetch(`${baseURL}/product/top100/${regionCode}/${dateConfig.year}/${dateConfig.month}/${dateConfig.day}`, {
        headers: {
          'x-ebirdapitoken': process.env.REACT_APP_EBIRD_API_KEY || ''
        }
      });
      const data: Top100ProductDTO = await response.json();
      return data;
    
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const fetchRecentNotableObservationsInRegion = async (regionCode: string = defaultRegion): Promise<RecentNotableObservationsInRegionDTO> => {
    try {
      const response = await fetch(`${baseURL}/data/obs/${regionCode}/recent/notable`, {
        headers: {
          'x-ebirdapitoken': process.env.REACT_APP_EBIRD_API_KEY || ''
        }
      });
      const data: RecentNotableObservationsInRegionDTO = await response.json();
      return data;

    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return {
    fetchTop100Product, fetchRecentNotableObservationsInRegion,
  }
}; 

export const apiService = apiServiceDefinition();
