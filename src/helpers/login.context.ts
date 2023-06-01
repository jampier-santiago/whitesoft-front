// Packages
import { createContext } from "react";

interface Context {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const LoginContext = createContext<Context>({
  isLogged: false,
  setIsLogged: () => null,
  token: "",
  setToken: () => null,
});

export default LoginContext;
