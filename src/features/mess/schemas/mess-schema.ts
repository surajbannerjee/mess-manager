import { z } from "zod";

export const createMessSchema = z.object({
  name: z.string().min(3, "Mess name must be at least 3 characters").max(50),

  description: z.string().optional(),
});

export type CreateMessSchema = z.infer<typeof createMessSchema>;
