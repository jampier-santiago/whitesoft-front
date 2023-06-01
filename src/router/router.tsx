// Packages
import { Routes, Route, Navigate } from "react-router-dom";

// Views
import usePages from "pages";

// Layouts
import useLayouts from "layouts";

// PrivateRoute
import PrivateRoute from "./PrivateRoute";

const useRouter = () => {
  // Components
  const { Login, Register, Dashboard } = usePages();

  // Layouts
  const { MainLayout } = useLayouts();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Register />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          ></PrivateRoute>
        }
      />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default useRouter;
