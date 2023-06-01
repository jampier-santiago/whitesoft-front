// Packages
import { FC } from "react";

// Components
import { Link } from "react-router-dom";

// Controllers
import useNavController from "controllers/components/nav.controller";

// Assets
import iconMenu from "assets/menu-dark.svg";
import user from "assets/usuario.png";

const Nav: FC = () => {
  // Controller
  const { isLogged, setIsLogged, setShowModal, showModal, handleLogout } =
    useNavController();

  return (
    <nav className="nav">
      {isLogged ? (
        <img
          className="nav__img-user"
          src={user}
          alt="Icono de la foto del usuario"
          title="Icono de la foto del usuario"
        />
      ) : (
        <span></span>
      )}

      <div className="nav__actions">
        {isLogged ? (
          <Link to="/" onClick={handleLogout}>
            Cerrar Sesion
            <span></span>
          </Link>
        ) : (
          <Link to="/login">
            Ingresar
            <span></span>
          </Link>
        )}

        <img
          src={iconMenu}
          alt="Icono de un menu"
          title="Icono de un menu"
          onClick={() => setShowModal((prev) => !prev)}
        />
      </div>

      {showModal && (
        <article className="modal">
          {isLogged ? (
            <Link to="/" onClick={() => setIsLogged(false)}>
              Cerrar Sesion
              <span></span>
            </Link>
          ) : (
            <Link to="/">
              Ingresar
              <span></span>
            </Link>
          )}
        </article>
      )}
    </nav>
  );
};

export default Nav;
