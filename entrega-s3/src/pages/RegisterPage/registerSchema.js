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
    .matches(/(?=.*?[A-Z])/, "A senha requer no minimo uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "A senha requer no minimo uma letra minúscula.")
    .min(6, "A senha requer no mínimo um número de 8 caracteres."),

  passwordConfirmation: yup
    .string()
    .required("Confirmação de senha necessária.")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),

  contact: yup.number().required("O número é obrigatório"),

  bio: yup
    .string()
    .min(10, "Sua bio precisa de no mínimo 10 caracteres!")
    .max(1200, "Sua bio pode ter no máximo 1200 caracteres"),

  course_module: yup.string().required("Selecione um módulo"),
});
