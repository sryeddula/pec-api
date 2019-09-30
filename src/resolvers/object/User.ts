import { objectType, stringArg } from 'nexus'
import { Context } from '../../types'


export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.firstName()
    t.model.lastLogin()
    t.model.isActive()
    t.model.isAdmin()
    t.model.updatedBy()
    t.model.updatedAt()
    t.model.tokenActive()
    t.list.field('roles', {
      type: 'UserEntityAccess',
      resolve: (root, args, ctx: Context) => {
        return ctx.photon.accesses.findMany({
          where: { user:{id:root.id} }
        })
      }
    })
    // t.list.field('expenses', {
    //   type: 'Expense',
    //   args:{
    //     entity: stringArg()
    //   },
    //   resolve: (root, {entity}, ctx: Context) => {
    //     let checkAccess = false
    //     ctx.photon.userEntityAccesses.findMany({
    //       where:{
    //         userId: root.id
    //       }
    //     }).then(x=>{
    //       console.log()
    //       if(x.length>0 && x.find(y=>y)){
    //         checkAccess = true
    //       }
    //     })
    //     if(checkAccess){
    //       return ctx.photon.expenses.findMany();
    //     }else{
    //       return ctx.photon.expenses.findMany({where:{id:"none"}});
    //     }
    //   }
    // })
  },
})
