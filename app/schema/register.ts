import {z} from "zod";

export const registerSchema = z.object({
  username: z.string().min(3," UserName must be at least 3 characters long").max(10,"username must be at most 10 characters long"),
  email:  z.string().email("Invalid email"),
  password: z.string().min(3,"Password must be at least 3 characters long"),
});

export type RegisterSchemaData = z.infer<typeof registerSchema>;

