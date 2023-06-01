// Packages
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";

// Context
import LoginContext from "helpers/login.context";

interface Props {
  element: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ element }) => {
  // Context
  const { token } = useContext(LoginContext);

  return token ? <>{element}</> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
