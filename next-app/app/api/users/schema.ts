import { z } from "zod";

// https://zod.dev/

const schema = z.object({
  name: z.string().min(3),
  // email: z.string().email(),
  // age: z.number()
});

export default schema;
