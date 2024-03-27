import { z } from "zod";

export const EditFormSchema = z.object({
    title: z.string().min(3, "Este campo é obrigatório"),
    status:z.string().min(1),
})