import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./style";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Input } from "../../components/Input";

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

        <Input
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register("name")}
          error={errors.name?.message && <small>{errors.name.message}</small>}
        />

        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
          error={errors.email?.message && <small>{errors.email.message}</small>}
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          error={
            errors.password?.message && <small>{errors.password.message}</small>
          }
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Confirme sua senha"
        />

        <Input
          id="bio"
          label="Bio"
          type="text"
          placeholder="Fale um pouco sobre você"
          register={register("bio")}
          error={errors.bio?.message && <small>{errors.bio.message}</small>}
        />

        <Input
          id="contact"
          label="Contato"
          type="text"
          placeholder="(DD) 0000-0000"
          register={register("contact")}
          error={
            errors.contact?.message && <small>{errors.contact.message}</small>
          }
        />

        <label htmlFor="course_module">Selecione o módulo</label>
        <select {...register("course_module")}>
          <option value="">Escolha o módulo</option>
          <option value="First">Primeiro módulo</option>
          <option value="Second">Segundo módulo</option>
          <option value="Third">Terceiro módulo</option>
        </select>
        {errors.course_module?.message && (
          <small>{errors.course_module.message}</small>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </StyledForm>
    </div>
  );
};
