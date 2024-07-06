import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { userSignin, userSignup } from "@sanskarworks/blog";

const userRouter = new Hono<{
    Bindings: {
		DATABASE_URL: string,
    JWT_KEY: string
	}
}>()

userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const { success } = userSignup.safeParse(body)
    if(!success){
      c.status(403)
      return c.json({"Message": "Data Not correct"})
    }
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    try{
      const user = await prisma.user.create({
        data:{
          email: body.email,
          password: body.password,
          name: body.name
        },
        select:{
          id: true,
          name: true
        }
      })
    
      const token = await sign({id: user.id}, c.env.JWT_KEY)
      return c.json({token: token})
    } catch(e){
      c.status(411)
      return c.json({error: "An error occurred while signup"})
    }
  
  })
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    try{
      const body = await c.req.json()
      const { success } = userSignin.safeParse(body)
      if(!success){
        c.status(403)
        return c.json({"Message": "An error occurred during signin"})
      }
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password
        }, 
        select: {
          name: true,
          id: true
        }
      })
    
      if(!user){
        c.status(403)
        return c.json({"Message": "Incorrect"})
      }
    
      const token = await sign({id: user.id}, c.env.JWT_KEY)
      return c.json({token: token, name: user.name})
    }catch(e){
      return c.text("An error occurred")
    }
  })

  export default userRouter