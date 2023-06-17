import {z} from "zod";

export const contactForm = z.object({
    Title: z.string(),
    name: z.string(),
    email: z.string().email(),
    content: z.string()
})

export type ContactForm = z.infer<typeof contactForm>