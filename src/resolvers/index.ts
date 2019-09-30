import { AuthPayload } from './object/AuthPayload'
import { Mutation } from './Mutation'
import { Query } from './Query'
import { User } from './object/User'
import { UserRole } from './enum/UserRole'
import { Entity } from './object/Entity'
import { Expense } from './object/Expense'
import { ExpenseCategory } from './enum/ExpenseCategory'
import {UserEntity} from './object/UserEntity'
import {UserEntityAccess} from './object/UserEntityAccess'
import {Access} from './object/Access'
import {Document} from './object/Document'




export const resolvers = {
//UserRole,
  // ExpenseCategory,

  Access,
  UserEntityAccess,
  UserEntity,
  Expense,
  Query,
  User,
  Entity,
  Mutation,
  Document,
  AuthPayload
}
