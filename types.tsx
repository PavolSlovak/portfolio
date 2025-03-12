import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  company: z.string(),
  message: z.string().optional(),
});
export type TContactForm = z.infer<typeof ContactFormSchema>;
