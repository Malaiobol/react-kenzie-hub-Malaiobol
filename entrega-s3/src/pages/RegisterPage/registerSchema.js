import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(6, "Seu nome precisa ter pelo menos 6 caracteres.")
    .max(200, "Seu nome precisa ter menos que 200 caracteres."),

  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("É necessário fornecer um email!"),

  password: yup
    .string()
    .required("A senha é obrigatória!")
    .matches(/^(?=.*?[A-Z])/, "A senha requer no uma letra maiúscula.")
    .matches(/^(?=.*?[a-z])/, "A senha requer no uma letra minúscula.")
    .min(8, "A senha requer no mínimo um número de 8 caracteres."),

  module: yup.string().required("Selecione um módulo"),
});
