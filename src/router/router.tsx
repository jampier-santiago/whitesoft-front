// Packages
import { Routes, Route, Navigate } from "react-router-dom";

// Views
import usePages from "pages";

// Layouts
import useLayouts from "layouts";

const useRouter = () => {
  // Components
  const { Login, Register } = usePages();

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

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default useRouter;
