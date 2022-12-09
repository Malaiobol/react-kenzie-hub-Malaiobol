import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { StyledForm } from "./style";
import { RegisterPopulation } from "./RegisterForm";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";

export const RegisterPage = () => {
  const { newUserRegister } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit = (data) => {
    newUserRegister(data);
    reset({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      bio: "",
      contact: "",
    });
  };

  return (
    <>
      <Header page={"/"} name={"Voltar"} />
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <RegisterPopulation
          register={register}
          errors={errors}
          loading={loading}
        />
      </StyledForm>
    </>
  );
};
