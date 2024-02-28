import { z } from "zod";

export const SigninSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Informe seu e-mail",
    })
    .email({
      message: "Informe um e-mail válido",
    }),
  password: z.string().min(6, {
    message: "Informe ao menos 6 caracteres",
  }),
});

export type SigninType = z.infer<typeof SigninSchema>;
