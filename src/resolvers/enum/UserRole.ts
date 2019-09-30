import { enumType } from 'nexus'

export const UserRole = enumType({
  name: 'UserRole',
  members:['Agent','Developer','HR','Employee']
})
