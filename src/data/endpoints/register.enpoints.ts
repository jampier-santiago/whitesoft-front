// Adapter
import { AxiosAdapter } from "data/adapter/axios.adapter";

interface Register {
  name: string;
  country: string;
}

const makeRegister = (body: Register): Promise<any> => {
  return new Promise(async (response, reject) => {
    try {
      const res = await new AxiosAdapter().post(
        `${process.env.REACT_APP_API_BACK}/registers`,
        { ...body }
      );
      response(res);
    } catch (error: any) {
      reject(error);
    }
  });
};

const useRegisterEndpoints = () => {
  return { makeRegister };
};

export default useRegisterEndpoints;
