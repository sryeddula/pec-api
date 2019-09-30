import { objectType } from 'nexus'

export const Document = objectType({
    name: 'Document',
    definition(t) {
        t.model.id()
        t.model.createdBy()
        t.model.createdAt()
        t.model.name()
        t.model.ext()
        t.model.mimetype()
    },
})