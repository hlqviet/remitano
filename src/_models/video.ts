import User from '@/src/_models/user'

export default interface Video {
  id: string
  title: string
  description: string
  userId: User['id']
}
