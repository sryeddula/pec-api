import { objectType } from 'nexus'

export const Access = objectType({
    name: 'Access',
    definition(t) {
        t.model.id()
        t.model.createdBy()
        t.model.createdAt()
        t.model.updatedBy()
        t.model.updatedAt()
        t.model.user()
        t.model.entity()
        t.field('role',{type:'UserRole'})
    },
})
