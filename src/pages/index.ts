// Packages
import { lazy } from "react";

// Views
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

const usePages = () => {
  return { Login, Register };
};

export default usePages;
