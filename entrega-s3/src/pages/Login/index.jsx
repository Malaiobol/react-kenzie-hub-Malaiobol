import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { StyledForm } from "./style";
import { loginSchema } from "./loginSchema";

import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Logo } from "../../Styles/Logo";
import { api } from "../../services/api";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const loginRequest = async (formData) => {
    try {
      setLoading(true);
      await api.post("/sessions", formData);
      toast.success("Sessão iniciada com sucesso.", {
        autoClose: 5000,
      });
      setTimeout(window.location("/home", 5000));
    } catch (err) {
      console.log(err);
      toast.error("Email ou senha inválidos, verifique suas credenciais.", {
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const login = (data) => {
    console.log(data);
    loginRequest(data);
    reset({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <Logo>Kenzie Hub</Logo>
      <StyledForm onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <Input
          id="email"
          type="email"
          label="email"
          placeholder="Digite seu email"
          error={errors.email?.message && <p>{errors.email.message}</p>}
        />
        <Input
          id="password"
          type="password"
          label="password"
          placeholder="Digite sua senha"
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
