import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(3, "Este campo é obrigatório"),
    email: z.string().email("Forneça um email válido").min(7),
    password: z.string().min(8, "São necessário no mínimo 8 caracteres.")
    .regex(/[a-z]+/, "É necessário pelo menos uma letra minúscula.")
    .regex(/[A-Z]+/, "É necessário pelo menos uma letra maiúscula.")
    .regex(/[0-9]+/, "É necessário pelo menos um número.")
    .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, "É necessário ter pelo menos um caracter especial."),
    confirmPassword: z.string().min(1, "Este campo é obrigatório"),
    bio: z.string().min(8, "Este campo é obrigatório"),
    contact: z.string().min(12, "Seu contato com o DDD(XXX) na frente").regex(/[0-9]+/, "Somente números."),
    course_module: z.string().min(1)
}).refine(( {password, confirmPassword} ) => password === confirmPassword,{
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
});