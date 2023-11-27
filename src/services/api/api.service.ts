import { DateConfig } from "./api.types";

// ToDo: change fetch to axios
// ToDo: authorization 

const apiServiceDefinition = () => {
  const baseURL = "https://api.ebird.org/v2";

  const fetchTop100Product = async (regionCode: number, dateConfig: DateConfig) => {
    try {
      const response = await fetch(`${baseURL}/product/top100/${regionCode}/${dateConfig.year}/${dateConfig.month}/${dateConfig.day}`);
      const data = await response.json();
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
