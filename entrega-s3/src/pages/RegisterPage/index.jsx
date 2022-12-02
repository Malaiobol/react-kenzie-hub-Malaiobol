import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "./style";
import { Header } from "../../components/Header";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submit = (data) => {
    console.log(data);
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
          //   {...register("password")}
        />
        <label htmlFor="about">Bio</label>
        <input
          type="text"
          placeholder="Fale sobre você (opcional)"
          {...register("about")}
        />
        <label htmlFor="module">Selecione o módulo</label>
        <select {...register("module")}>
          <option value="">Escolha o módulo</option>
          <option value="First">Primeiro módulo</option>
          <option value="Second">Segundo módulo</option>
          <option value="Third">Terceiro módulo</option>
        </select>
        {errors.module?.message && <p>{errors.module.message}</p>}
        <button type="submit">Cadastrar</button>
      </StyledForm>
    </div>
  );
};
