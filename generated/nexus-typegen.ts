/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../src/types"
import * as photon from "@generated/photon"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AccessCreateInput: { // input type
    createdAt?: any | null; // DateTime
    createdBy?: string | null; // String
    entity: NexusGenInputs['EntityCreateOneWithoutEntityInput']; // EntityCreateOneWithoutEntityInput!
    id?: string | null; // ID
    role: NexusGenEnums['UserRole']; // UserRole!
    updatedAt?: any | null; // DateTime
    updatedBy?: string | null; // String
    user: NexusGenInputs['UserCreateOneWithoutUserInput']; // UserCreateOneWithoutUserInput!
  }
  DocumentCreateOneWithoutDocumentInput: { // input type
    connect?: NexusGenInputs['DocumentWhereUniqueInput'] | null; // DocumentWhereUniqueInput
    create?: NexusGenInputs['DocumentCreateWithoutExpenseInput'] | null; // DocumentCreateWithoutExpenseInput
  }
  DocumentCreateWithoutExpenseInput: { // input type
    createdAt?: any | null; // DateTime
    createdBy?: string | null; // String
    ext: string; // String!
    id?: string | null; // ID
    mimetype?: string | null; // String
    name: string; // String!
  }
  DocumentWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  EntityCreateOneWithoutEntityInput: { // input type
    connect?: NexusGenInputs['EntityWhereUniqueInput'] | null; // EntityWhereUniqueInput
    create?: NexusGenInputs['EntityCreateWithoutUsersInput'] | null; // EntityCreateWithoutUsersInput
  }
  EntityCreateWithoutUsersInput: { // input type
    createdAt?: any | null; // DateTime
    createdBy?: string | null; // String
    expenses?: NexusGenInputs['ExpenseCreateManyWithoutExpensesInput'] | null; // ExpenseCreateManyWithoutExpensesInput
    id?: string | null; // ID
    identity: string; // String!
    name: string; // String!
    updatedAt?: any | null; // DateTime
    updatedBy?: string | null; // String
  }
  EntityWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ExpenseCreateManyWithoutExpensesInput: { // input type
    connect?: NexusGenInputs['ExpenseWhereUniqueInput'][] | null; // [ExpenseWhereUniqueInput!]
    create?: NexusGenInputs['ExpenseCreateWithoutEntityInput'][] | null; // [ExpenseCreateWithoutEntityInput!]
  }
  ExpenseCreateWithoutEntityInput: { // input type
    category: NexusGenEnums['ExpenseCategory']; // ExpenseCategory!
    createdAt?: any | null; // DateTime
    createdBy?: string | null; // String
    description?: string | null; // String
    document?: NexusGenInputs['DocumentCreateOneWithoutDocumentInput'] | null; // DocumentCreateOneWithoutDocumentInput
    gross: number; // Float!
    id?: string | null; // ID
    net?: number | null; // Float
    updatedAt?: any | null; // DateTime
    updatedBy?: string | null; // String
    vat?: number | null; // Float
  }
  ExpenseWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutRolesInput'] | null; // UserCreateWithoutRolesInput
  }
  UserCreateWithoutRolesInput: { // input type
    createdAt?: any | null; // DateTime
    createdBy?: string | null; // String
    email: string; // String!
    firstName: string; // String!
    id?: string | null; // ID
    isActive?: boolean | null; // Boolean
    isAdmin?: boolean | null; // Boolean
    lastLogin?: any | null; // DateTime
    lastName: string; // String!
    name: string; // String!
    password: string; // String!
    tokenActive?: boolean | null; // Boolean
    updatedAt?: any | null; // DateTime
    updatedBy?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  ExpenseCategory: photon.ExpenseCategory
  UserRole: photon.UserRole
}

export interface NexusGenRootTypes {
  Access: photon.Access;
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Document: photon.Document;
  Entity: photon.Entity;
  Expense: photon.Expense;
  Mutation: {};
  Query: {};
  User: photon.User;
  UserEntity: { // root type
    hello: string; // String!
  }
  UserEntityAccess: { // root type
    id: string; // ID!
    role: NexusGenEnums['UserRole']; // UserRole!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AccessCreateInput: NexusGenInputs['AccessCreateInput'];
  DocumentCreateOneWithoutDocumentInput: NexusGenInputs['DocumentCreateOneWithoutDocumentInput'];
  DocumentCreateWithoutExpenseInput: NexusGenInputs['DocumentCreateWithoutExpenseInput'];
  DocumentWhereUniqueInput: NexusGenInputs['DocumentWhereUniqueInput'];
  EntityCreateOneWithoutEntityInput: NexusGenInputs['EntityCreateOneWithoutEntityInput'];
  EntityCreateWithoutUsersInput: NexusGenInputs['EntityCreateWithoutUsersInput'];
  EntityWhereUniqueInput: NexusGenInputs['EntityWhereUniqueInput'];
  ExpenseCreateManyWithoutExpensesInput: NexusGenInputs['ExpenseCreateManyWithoutExpensesInput'];
  ExpenseCreateWithoutEntityInput: NexusGenInputs['ExpenseCreateWithoutEntityInput'];
  ExpenseWhereUniqueInput: NexusGenInputs['ExpenseWhereUniqueInput'];
  UserCreateOneWithoutUserInput: NexusGenInputs['UserCreateOneWithoutUserInput'];
  UserCreateWithoutRolesInput: NexusGenInputs['UserCreateWithoutRolesInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  ExpenseCategory: NexusGenEnums['ExpenseCategory'];
  UserRole: NexusGenEnums['UserRole'];
}

export interface NexusGenFieldTypes {
  Access: { // field return type
    createdAt: any; // DateTime!
    createdBy: string | null; // String
    entity: NexusGenRootTypes['Entity']; // Entity!
    id: string; // ID!
    role: NexusGenEnums['UserRole']; // UserRole!
    updatedAt: any; // DateTime!
    updatedBy: string | null; // String
    user: NexusGenRootTypes['User']; // User!
  }
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Document: { // field return type
    createdAt: any; // DateTime!
    createdBy: string | null; // String
    ext: string; // String!
    id: string; // ID!
    mimetype: string | null; // String
    name: string; // String!
  }
  Entity: { // field return type
    expenses: NexusGenRootTypes['Expense'][]; // [Expense!]!
    id: string; // ID!
    identity: string; // String!
    name: string; // String!
  }
  Expense: { // field return type
    category: NexusGenEnums['ExpenseCategory']; // ExpenseCategory!
    createdAt: any; // DateTime!
    createdBy: string | null; // String
    description: string | null; // String
    document: NexusGenRootTypes['Document'] | null; // Document
    gross: number; // Float!
    id: string; // ID!
    net: number | null; // Float
    updatedAt: any; // DateTime!
    updatedBy: string | null; // String
    vat: number | null; // Float
  }
  Mutation: { // field return type
    createOneAccess: NexusGenRootTypes['Access']; // Access!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Query: { // field return type
    entities: NexusGenRootTypes['Entity'][] | null; // [Entity!]
    me: NexusGenRootTypes['User']; // User!
    roles: NexusGenRootTypes['Access'][]; // [Access!]!
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // ID!
    isActive: boolean; // Boolean!
    isAdmin: boolean; // Boolean!
    lastLogin: any; // DateTime!
    name: string; // String!
    roles: NexusGenRootTypes['UserEntityAccess'][]; // [UserEntityAccess!]!
    tokenActive: boolean; // Boolean!
    updatedAt: any; // DateTime!
    updatedBy: string | null; // String
  }
  UserEntity: { // field return type
    hello: string; // String!
  }
  UserEntityAccess: { // field return type
    entity: NexusGenRootTypes['Entity']; // Entity!
    entityName: NexusGenRootTypes['Entity']; // Entity!
    id: string; // ID!
    role: NexusGenEnums['UserRole']; // UserRole!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneAccess: { // args
      data: NexusGenInputs['AccessCreateInput']; // AccessCreateInput!
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    signup: { // args
      email?: string | null; // String
      firstName?: string | null; // String
      lastName?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
    }
  }
  Query: {
    entities: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    roles: { // args
      entityId?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Access" | "AuthPayload" | "Document" | "Entity" | "Expense" | "Mutation" | "Query" | "User" | "UserEntity" | "UserEntityAccess";

export type NexusGenInputNames = "AccessCreateInput" | "DocumentCreateOneWithoutDocumentInput" | "DocumentCreateWithoutExpenseInput" | "DocumentWhereUniqueInput" | "EntityCreateOneWithoutEntityInput" | "EntityCreateWithoutUsersInput" | "EntityWhereUniqueInput" | "ExpenseCreateManyWithoutExpensesInput" | "ExpenseCreateWithoutEntityInput" | "ExpenseWhereUniqueInput" | "UserCreateOneWithoutUserInput" | "UserCreateWithoutRolesInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "ExpenseCategory" | "UserRole";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}