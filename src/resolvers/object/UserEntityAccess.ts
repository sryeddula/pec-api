import { objectType } from 'nexus'

export const UserEntityAccess = objectType({
    name: 'UserEntityAccess',
    definition(t) {
        t.model('Access').id()
        t.field('role', { type: 'UserRole' })
        t.model('Access').entity()
        t.field('entityName', {
            type: 'Entity',
            resolve: (root, args, ctx) => {
                console.log(root)
                return ctx.photon.entities.findOne({
                    where: {
                        id: "dff"
                    }
                })
            }
        })
    }
})
