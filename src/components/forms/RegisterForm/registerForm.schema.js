import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(3, "Este campo é obrigatório"),
    email: z.string().email("Forneça um email válido").min(7),
    password: z.string().min(8, "Necessário 8 caracteres.")
    .regex(/[a-z]+/, "Necessário uma letra minúscula.")
    .regex(/[A-Z]+/, "Necessário uma letra maiúscula.")
    .regex(/[0-9]+/, "Necessário um número.")
    .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, "Necessário um caracter especial."),
    confirmPassword: z.string().min(1, "Campo obrigatório"),
    bio: z.string().min(8, "Campo é obrigatório"),
    contact: z.string().min(9, "Campo obrigatório").regex(/[0-9]+/, "Somente números."),
    course_module: z.string().min(1)
}).refine(( {password, confirmPassword} ) => password === confirmPassword,{
    message: "Senhas não correspondem.",
    path: ["confirmPassword"],
});