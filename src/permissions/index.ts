import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'
import { Context } from '../types'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  // entityAccessCheck: rule()((parent, {entityId}, context:Context) => {
  //   const userId = getUserId(context)
  //   let allowed = false;
  //   if(userId){
  //     context.photon.users.findMany().then(u=>{
  //       console.log(u)
  //       if(u.length>0){
  //         allowed=true
  //       }
  //     })
  //   }
  //   return allowed
  // })
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
  },
  Mutation: {

  },
})
