// Packages
import { FC } from "react";

// Controllers
import useDashboardControllers from "controllers/pages/dashboard.controllers";

const Dashboard: FC = () => {
  // Controllers
  const { registers } = useDashboardControllers();

  return (
    <main className="dashboard">
      <h1 className="dashboard__title">Todos los registros</h1>

      {registers.length > 0 ? (
        <section className="dashboard__table">
          <div className="header">
            <h4>Id</h4>
            <h4>Nombre</h4>
            <h4>País</h4>
            <h4>Fecha</h4>
          </div>

          {registers.map((register) => (
            <div key={register._id} className="row">
              <h4>{register._id}</h4>

              <h4>{register.name}</h4>

              <div>
                <img src={register.country.flag} alt={register.country.name} />

                <span>{register.country.name}</span>
              </div>

              <h4>{`${new Date(register.date).getDate()} / ${new Date(
                register.date
              ).getMonth()} / ${new Date(register.date).getFullYear()}`}</h4>
            </div>
          ))}
        </section>
      ) : (
        <section className="dashboard__empty">
          <h2>En este momento no se encontró ningún registro</h2>
        </section>
      )}
    </main>
  );
};

export default Dashboard;
