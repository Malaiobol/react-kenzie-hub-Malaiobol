import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledForm } from "./style";
import { loginSchema } from "./loginSchema";

import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Logo } from "../../Styles/Logo";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { loginRequest } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const login = (data) => {
    try {
      loginRequest(data);
      setLoading(true);
    } finally {
      reset({
        email: "",
        password: "",
      });
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <Logo>Kenzie Hub</Logo>
      <StyledForm onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          register={register("email")}
          error={errors.email?.message && <p>{errors.email.message}</p>}
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register("password")}
          error={errors.password?.message && <p>{errors.password.message}</p>}
        />
        <div>
          <button type="submit">{loading ? "Entrando..." : "Entrar"}</button>
        </div>
        <div>
          <small>Ainda não possui uma conta?</small>
        </div>
        <div>
          <Link to={"/register"}>Cadastre-se</Link>
        </div>
      </StyledForm>
    </>
  );
};
