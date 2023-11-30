import { DateConfig, Top100ProductDTO } from "./api.types";

// ToDo: change fetch to axios
// ToDo: authorization 

const apiServiceDefinition = () => {
  const baseURL = "https://api.ebird.org/v2";
  const defaultRegion = 'world'

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

  return {
    fetchTop100Product,
  };
};

export const apiService = apiServiceDefinition();
