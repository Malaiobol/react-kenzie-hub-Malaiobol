import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./style";
import { Header } from "../../components/Header";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const RegisterForm = () => {
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

  const newUserRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success(`Olá! ${formData.name} você foi cadastrado(a)!`, {
        autoClose: 5000,
      });
    } catch (err) {
      console.log(err);
      toast.error("Usuário não cadastrado, verifique suas informações.", {
        autoClose: 5000,
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
      bio: "",
      contact: "",
    });
  };

  return (
    <div>
      <Header />
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <div>
          <h2>Crie sua conta</h2>
          <span>
            <p>Rápido e grátis, vamos nessa</p>
          </span>
        </div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email válido"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("password")}
        />
        <label htmlFor="bio">Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio?.message && <p>{errors.bio.message}</p>}
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          placeholder="(DD) 0000-0000"
          {...register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}
        <label htmlFor="course_module">Selecione o módulo</label>
        <select {...register("course_module")}>
          <option value="">Escolha o módulo</option>
          <option value="First">Primeiro módulo</option>
          <option value="Second">Segundo módulo</option>
          <option value="Third">Terceiro módulo</option>
        </select>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </StyledForm>
    </div>
  );
};
