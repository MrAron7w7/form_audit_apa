import z from "zod";

const signInSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export { signInSchema, type SignInFormValues };