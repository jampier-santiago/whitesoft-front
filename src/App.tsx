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

  const loginData = useMemo(() => ({ isLogged, setIsLogged }), [isLogged]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContext.Provider value={loginData}>
        <BrowserRouter>{Router}</BrowserRouter>
      </LoginContext.Provider>
    </Suspense>
  );
}

export default App;
