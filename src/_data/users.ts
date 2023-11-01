import User from '@/src/_models/user'

declare global {
  var users: User[]
}

if (!global.users) {
  global.users = []
}

const users = global.users

export default users
