// Packages
import { useForm } from "react-hook-form";

const useRegisterController = () => {
  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // Functions
  /**
   * Function for do validations and send the form data
   */
  const submit = (data: any) => {
    console.log(data);
  };

  return { register, submit, handleSubmit, errors };
};

export default useRegisterController;
