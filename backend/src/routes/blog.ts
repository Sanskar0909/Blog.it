import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { createBlog, updateBlog } from "@sanskarworks/blog"
import { Hono } from "hono"
import { verify } from "hono/jwt"

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_KEY: string,
    },
    Variables: {
        userId: string
    }
}>()

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try{
        const user = await verify(authHeader, c.env.JWT_KEY)
        if(user){
            //@ts-ignore
            c.set("userId", user.id)
            await next()
        }else{
            return c.json({"Message": "Not logged in"})
        }
    }catch(e){
        c.status(403)
        return c.text("Not logged in")
    }
})

blogRouter.post('/create', async (c) => {
    const body = await c.req.json()
    const userId = c.get("userId")
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const { success } = createBlog.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({"Message": "Error while publishing the blog"})
    }

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.put('/update', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const { success } = updateBlog.safeParse(body)
    if(!success){
        c.status(403)
        return c.json({"Message": "Error while updating the blog"})
    }

    try{
        const blog = await prisma.post.update({
            data: {
                title: body.title,
                content: body.content,
            }, 
            where: {
                id: body.id
            }
        })
    
        return c.json({
            id: blog.id
        })
    }catch(e){
        return c.text("An error occurred")
    }
})

blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const blogs = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }

            }
        })

        return c.json({
            blogs
        })
    }catch(e){
        return c.text("An error occurred")
    }
})

blogRouter.get('/:id', async(c) => {
    const paramId = c.req.param('id')
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.post.findUnique({
            where: {
                id: paramId
            },

            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        
        if(!blog){
            return c.text("No Blog found")
        }
        return c.json({
            blog
        })
    }catch(e){
        return c.text("An error occurred")
    }
})

//pagination

export default blogRouter