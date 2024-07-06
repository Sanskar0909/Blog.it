import { z } from "zod"

export const userSignup = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string()
})

export const userSignin = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createBlog = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type UserSignup = z.infer<typeof userSignup>
export type UserSignin = z.infer<typeof userSignin>
export type CreateBlog = z.infer<typeof createBlog>
export type UpdateBlog = z.infer<typeof updateBlog>
