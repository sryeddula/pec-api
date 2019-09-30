import { enumType } from 'nexus'

export const ExpenseCategory = enumType({
    name: 'ExpenseCategory',
    members: ['Food', 'Travel']
})
