import { objectType } from 'nexus'

export const UserEntity = objectType({
    name: 'UserEntity',
    definition(t) {
        t.string('hello')
        // t.model('UserEntityAccess').entityId()
        // t.field('role',{type:'UserRole'})
        // t.string('name',{
        //     resolve: async ({entityId},args,ctx) =>{
        //         let name:String;
        //         await ctx.photon.entities.findOne({where:{
        //             id:entityId
        //         }}).then(x=>{name=x.name})
        //         return name
        //     }
        // })
    }
})
