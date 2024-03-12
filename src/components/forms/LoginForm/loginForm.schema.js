import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, "Este campo é obrigatório."),
    password: z.string().min(1, "Este campo é obrigatório."),
  });