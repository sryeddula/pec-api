import { idArg, queryType, stringArg } from 'nexus'
import { getUserId } from '../utils'

export const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.photon.users.findOne({
          where: {
            id: userId,
          },
        })
      },
    })
    t.list.field('roles', {
      type: 'Access',
      args: {
        entityId: stringArg(),
      },
      resolve: (parent, { entityId }, ctx) => {
        const userId = getUserId(ctx)
        return ctx.photon.accesses.findMany(
        )
      },
    })
    t.crud.entities()
  },
})
