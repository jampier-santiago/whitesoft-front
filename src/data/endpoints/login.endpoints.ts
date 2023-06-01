// Packages
import { AxiosAdapter } from "../adapter/axios.adapter";

const login = (body: { email: string; password: string }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await new AxiosAdapter().post(
        `${process.env.REACT_APP_API_BACK}/auth`,
        { ...body }
      );

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const useLoginEndpoints = () => {
  return { login };
};

export default useLoginEndpoints;
