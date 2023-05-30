// Packages
import { FC } from "react";

// Components
import useComponents from "components";

interface Props {
  children: any;
}

const MainLayout: FC<Props> = ({ children }) => {
  // Components
  const { Footer, Nav } = useComponents();

  return (
    <div>
      {/* nav  */}
      <Nav />
      {/* nav  */}

      {/* Body */}
      {children}
      {/* Body */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
