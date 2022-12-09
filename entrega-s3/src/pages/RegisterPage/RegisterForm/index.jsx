import { Input } from "../../../components/Input";

export const RegisterPopulation = ({ register, errors, loading }) => {
  return (
    <>
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
        id="passwordConfirmation"
        label="Confirmar senha"
        type="password"
        placeholder="Confirme sua senha"
        register={register("passwordConfirmation")}
        error={
          errors.passwordConfirmation?.message && (
            <small>{errors.passwordConfirmation.message}</small>
          )
        }
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
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </select>
      {errors.course_module?.message && (
        <small>{errors.course_module.message}</small>
      )}
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </>
  );
};
