import { objectType, stringArg, arg } from 'nexus'
import { Context } from '../../types'
import { getUserId } from '../../utils'

export const Entity = objectType({
  name: 'Entity',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.identity()
    t.list.field('expenses', {
      type: 'Expense',
      resolve: (root, args, ctx) => {
        return ctx.photon.expenses.findMany({
          where: {
            entity: { id: root.id }
          }
        })
      }
    })
    // t.list.field('users', {
    //   type: 'UserEntityAccess',
    //   resolve: (root, args, ctx: Context) => {
    //     const userId = getUserId(ctx)
    //     return ctx.photon.userEntityAccesses.findMany({
    //       where: {
    //         AND: {
    //           userId: userId,
    //           entityId: root.id
    //         }
    //       }
    //     })
    //   }
    // })
  },
})
