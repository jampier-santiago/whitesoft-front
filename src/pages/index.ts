// Packages
import { lazy } from "react";

// Views
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Dashboard = lazy(() => import("./Dashboard"));

const usePages = () => {
  return { Login, Register, Dashboard };
};

export default usePages;
