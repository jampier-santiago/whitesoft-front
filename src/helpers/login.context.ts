// Packages
import { createContext } from "react";

interface Context {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<Context>({
  isLogged: false,
  setIsLogged: () => null,
});

export default LoginContext;
