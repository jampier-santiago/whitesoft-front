// Packages
import { FC } from "react";

// Components
import useComponents from "components";

// Controllers
import useLoginController from "controllers/pages/login.controller";

const Login: FC = () => {
  // Components
  const { Button, Input } = useComponents();

  // Controller
  const { register, handleSubmit, submit, errors } = useLoginController();

  return (
    <main className="login">
      <h1>Ingresar al panel administrativo</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div className="fields">
          <div className="fields__element">
            <Input
              id="email"
              placeholder="Escribe tu correo"
              textLabel="Escribe tu correo"
              variant="input"
              register={register}
              required
              error={(errors as any).email}
              messageError="Este campo es obligatorio"
              autoComplete="off"
            />
          </div>

          <div className="fields__element">
            <Input
              id="password"
              placeholder="Escribe tu contraseña"
              textLabel="Escribe tu contraseña"
              variant="input"
              register={register}
              required
              error={(errors as any).password}
              messageError="Este campo es obligatorio"
              autoComplete="off"
              type="password"
            />
          </div>
        </div>

        <Button text="Ingresar" className="form-botton" widthFull />
      </form>
    </main>
  );
};

export default Login;
