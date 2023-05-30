// Packages
import { useContext, useState } from "react";

// Context
import LoginContext from "helpers/login.context";

const useNavController = () => {
  // Context
  const { isLogged, setIsLogged } = useContext(LoginContext);

  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  return { isLogged, setIsLogged, showModal, setShowModal };
};

export default useNavController;
