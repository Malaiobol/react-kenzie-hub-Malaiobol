import { StyledModalForm } from "./style";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext, TechProvider } from "../../../contexts/TechContext";
import { AuthContext } from "../../../contexts/AuthContext";

export const ModalForm = ({ setNeed }) => {
  const { createTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const newTech = (data) => {
    createTech(data);
    setNeed(false);
  };

  return (
    <StyledModalForm onSubmit={handleSubmit(newTech)} noValidate>
      <Input
        id="title"
        label="Nome"
        type="text"
        placeholder="Digite aqui a tecnologia"
        register={register("title")}
      />
      <div>
        <label htmlFor="status">Status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <button type="submit">Cadastrar tecnologia</button>
    </StyledModalForm>
  );
};
