// Packages
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Endpoints
import useLoginEndpoints from "data/endpoints/login.endpoints";

// Context
import LoginContext from "helpers/login.context";

const useLoginController = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  // Context
  const { setIsLogged, setToken } = useContext(LoginContext);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Endpoints
  const { login } = useLoginEndpoints();

  // Functions
  const submit = (data: any) => {
    login({ email: data.email, password: data.password })
      .then((data: any) => {
        setIsLogged(true);
        setToken(data.token);
        navigate("/admin");
      })
      .catch((err) => {
        const response = err.response;

        if (response.status === 500) {
          MySwal.fire({
            title: "Error",
            icon: "error",
            text: "Error with the server",
            confirmButtonText: "Close",
          })
            .then(() => {})
            .catch(() => {});
        }

        if (response.status === 400) {
          MySwal.fire({
            title: "Error",
            icon: "error",
            text: response.data.msg,
            confirmButtonText: "Close",
          })
            .then(() => {})
            .catch(() => {});
        }
      });
  };

  return { register, handleSubmit, submit, errors };
};

export default useLoginController;
