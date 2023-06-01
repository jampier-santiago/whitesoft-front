// Packages
import { useContext, useState } from "react";

// Context
import LoginContext from "helpers/login.context";

const useNavController = () => {
  // Context
  const { isLogged, setIsLogged, setToken } = useContext(LoginContext);

  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Functions
  const handleLogout = () => {
    setIsLogged(false);
    setToken("");
  };

  return { isLogged, setIsLogged, showModal, setShowModal, handleLogout };
};

export default useNavController;
