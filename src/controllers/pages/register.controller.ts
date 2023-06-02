// Packages
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Endpoints
import useCountriesEndpoints, {
  Country,
} from "data/endpoints/countries.endpoints";
import useRegisterEndpoints from "data/endpoints/register.enpoints";

const useRegisterController = () => {
  const MySwal = withReactContent(Swal);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Endpoints
  const { getAllCountries } = useCountriesEndpoints();
  const { makeRegister } = useRegisterEndpoints();

  // States
  const [backupCountries, setBackupCountries] = useState<Array<Country>>([]);
  const [countries, setCountries] = useState<
    Array<{ text: string; value: string }>
  >([]);
  const [activeCountry, setActiveCountry] = useState<Country>();

  // Functions
  /**
   * Function for send the form data
   */
  const submit = (data: any) => {
    const body = { name: data.name, country: "das" };

    // Send data for endpoint
    makeRegister(body)
      .then((res) => {
        if (res === "The register was inserted success") {
          MySwal.fire({
            title: "Success",
            icon: "success",
            text: "El registro fue ingresado con éxito",
            confirmButtonText: "Next",
          })
            .then(() => {
              reset();
              setActiveCountry(undefined);
            })
            .catch(() => {});
        }
      })
      .catch((err) => {
        const response = err.response;

        if (response.status === 500) {
          MySwal.fire({
            title: "Error",
            icon: "error",
            text: "Error con el servidor, por favor inténtelo en otro momento",
            confirmButtonText: "Close",
          })
            .then(() => {})
            .catch(() => {});
        }

        if (response.status === 400) {
          let error = "";

          response.data.errors.forEach((err: any) => {
            error += `${err.msg} ,`;
          });

          MySwal.fire({
            title: "Error",
            icon: "error",
            text: error,
            confirmButtonText: "Close",
          })
            .then(() => {})
            .catch(() => {});
        }
      });
  };

  /**
   * Function to bring all the countries from the database
   */
  const handleCountries = async () => {
    const countries = await getAllCountries();

    if (countries) {
      setBackupCountries(countries);

      const dataForSelectComponent = countries.map((country) => ({
        text: country.name,
        value: country.uid,
      }));

      setCountries(dataForSelectComponent);
    }
  };

  /**
   * Function to handle country change
   */
  const handleFlagForActiveCountry = (element: any) => {
    const id = element.target.value;

    const curretCountry = backupCountries.filter(
      (country) => country.uid === id
    )[0];

    setActiveCountry(curretCountry);
  };

  // Effects
  useEffect(() => {
    handleCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    register,
    submit,
    handleSubmit,
    errors,
    countries,
    handleFlagForActiveCountry,
    activeCountry,
  };
};

export default useRegisterController;
