import { objectType } from 'nexus'

export const Expense = objectType({
    name: 'Expense',
    definition(t) {
        t.model.id()
        t.model.createdBy()
        t.model.createdAt()
        t.model.updatedBy()
        t.model.updatedAt()
        t.field('category', { type: 'ExpenseCategory'})
        t.model.description()
        t.model.documentId()
        t.model.net()
        t.model.vat()
        t.model.gross()
    },
})
