import { z } from "zod";

export const commentValidator = z.object({
  name: z.string(),
  comment: z.string(),
  email: z.string().email(),
  slug: z.string(),
});
