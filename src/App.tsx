// Packages
import { Suspense, useState, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";

// Context
import LoginContext from "helpers/login.context";

// Router
import useRouter from "router/router";

// Stlyes
import "./App.scss";

function App() {
  const Router = useRouter();

  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const loginData = useMemo(
    () => ({ isLogged, setIsLogged, token, setToken }),
    [isLogged, token]
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContext.Provider value={loginData}>
        <BrowserRouter>{Router}</BrowserRouter>
      </LoginContext.Provider>
    </Suspense>
  );
}

export default App;
