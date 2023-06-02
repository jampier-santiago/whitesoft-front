// Packages
import { FC } from "react";

// Controllers
import useRegisterController from "controllers/pages/register.controller";

// Components
import useComponents from "components";

const Register: FC = () => {
  // Controllers
  const {
    register,
    handleSubmit,
    submit,
    errors,
    countries,
    activeCountry,
    handleFlagForActiveCountry,
  } = useRegisterController();

  // Components
  const { Input, Button } = useComponents();

  return (
    <main className="register">
      <h1 className="register__title">Regístrate con nosotros</h1>

      {/* Form  */}
      <form onSubmit={handleSubmit(submit)} className="register__form">
        <div className="fields">
          <div className="fields__element">
            <Input
              id="name"
              placeholder="Escribe tu nombre"
              textLabel="Escribe tu nombre"
              variant="input"
              register={register}
              required
              error={(errors as any).name}
              messageError="Este campo es obligatorio"
              autoComplete="off"
            />
          </div>

          <div className="fields__element">
            {activeCountry && (
              <img src={activeCountry.flag} alt={activeCountry.name} />
            )}

            <Input
              id="country"
              placeholder="Selecciona tu país"
              textLabel="Selecciona tu pais"
              variant="select"
              options={countries}
              register={register}
              required
              error={(errors as any).country}
              messageError="Este campo es obligatorio"
              onChange={handleFlagForActiveCountry}
            />
          </div>
        </div>

        <Button text="Registrarme" className="form-botton" widthFull />
      </form>
      {/* Form  */}
    </main>
  );
};

export default Register;
