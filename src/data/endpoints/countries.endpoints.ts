// Adapter
import { AxiosAdapter } from "data/adapter/axios.adapter";

export interface Country {
  name: string;
  state: boolean;
  flag: string;
  timezone: string;
  uid: string;
}

/**
 * Function for get all countries
 */
const getAllCountries = async () => {
  try {
    const response = await new AxiosAdapter().get<Array<Country>>(
      `${process.env.REACT_APP_API_BACK}/countries`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

const useCountriesEndpoints = () => {
  return { getAllCountries };
};

export default useCountriesEndpoints;
