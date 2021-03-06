import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { idArg, mutationType, stringArg,enumType } from 'nexus'
import { APP_SECRET, getUserId } from '../utils'

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg({ nullable: true }),
        email: stringArg(),
        password: stringArg(),
        firstName: stringArg(),
        lastName: stringArg()
      },
      resolve: async (parent, {  firstName, lastName, name, email, password,   }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.photon.users.create({
          data: {
            name,
            email,
            password: hashedPassword,
            createdBy: "admin",
            updatedBy: "admin",
            firstName,
            lastName
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, context) => {
        const user = await context.photon.users.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })
    // t.field('createAccess',{
    //   type:'Access',
    //   args:{
    //     user: stringArg({required:true}),
    //     role: enumType({name:'UserRole'})
    //     entity: stringArg({required:true})
    //   }
    // })
    t.crud.createOneAccess()
  },
})
