// Packages
import { useState, useEffect, useContext } from "react";

// Endpoints
import useRegisterEndpoints from "data/endpoints/register.enpoints";

// Context
import LoginContext from "helpers/login.context";

interface Register {
  _id: string;
  name: string;
  date: Date;
  country: {
    _id: string;
    name: string;
    flag: string;
  };
}

const useDashboardControllers = () => {
  // Context
  const { token } = useContext(LoginContext);

  // Endpoints
  const { getAllRegisters } = useRegisterEndpoints();

  // States
  const [registers, setRegisters] = useState<Array<Register>>([]);

  // Functions
  /**
   * Function to fetch all records
   */
  const allRegisters = () => {
    getAllRegisters(token)
      .then((res: any) => setRegisters(res))
      .catch((error) => console.log(error));
  };

  // Effects
  useEffect(() => {
    allRegisters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { registers };
};

export default useDashboardControllers;
