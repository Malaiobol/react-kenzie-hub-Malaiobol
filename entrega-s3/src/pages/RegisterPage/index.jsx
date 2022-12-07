import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { StyledForm } from "./style";
import { RegisterPopulation } from "./RegisterForm";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const newUserRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success(`Olá ${formData.name} você foi cadastrado(a)!`, {
        autoClose: 1000,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Usuário não cadastrado, verifique suas informações.", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };
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
