import { TRPCError } from "@trpc/server";
import { string, z } from "zod";
import slug from "slug"

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

// export const cardRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.example.findMany();
//   }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
// });

export const cardRouter = createTRPCRouter({
  publishCard: protectedProcedure.input(z.object({website: z.string(), title: string() })).mutation(async({ctx, input})=>{
    const {email, image, name} = ctx.session.user
    const {title, website} = input

    if(!email||!website||!name) throw new TRPCError({code: 'UNAUTHORIZED'})

    const card = await ctx.prisma.businessCard.upsert({
      create:{
        title,
        website,
        email,
        imgSrc: image,
        name,
        slug: slug(name)
      },
      update:{
        title,
        website,
        email,
        imgSrc: image,
        name,
        slug: slug(name)
      },
      where :{
        slug:slug(name),
      }
    })
    return card
  }),

  getCard: publicProcedure.input(z.object({slug: z.string()})).query(async({ctx,input})=>{
    const {slug} = input 
    const card = await ctx.prisma.businessCard.findUnique({
      where:{
        slug
      }
    })
    return card
  })
})