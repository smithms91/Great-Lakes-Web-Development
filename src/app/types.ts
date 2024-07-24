import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is too short",
  }).max(50, {
    message: "Name is too long",
  }),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Phone number is too short",
  }).max(15, {
    message: "Phone number is too long",
  }),
  message: z.string().min(10, {
    message: "Message is too short",
  }).max(500, {
    message: "Message is too long",
  }),
});