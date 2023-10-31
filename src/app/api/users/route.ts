import users from '@/src/_data/users'
import { HttpStatus } from '@/src/_lib/enums'

export async function GET() {
  return Response.json(users.map(({ id, email }) => ({ id, email })))
}

export async function POST(req: Request) {
  const { email, password } = await req.json()
  const user = users.find((user) => user.email === email)

  if (!user) {
    const lastUser = users[users.length - 1]
    const newUser = { id: lastUser ? lastUser.id + 1 : 1, email, password }

    users.push(newUser)

    return Response.json(newUser)
  }

  if (user.password === password) return Response.json(user)

  return Response.json(
    { message: 'Email or password is incorrect.' },
    { status: HttpStatus.Unauthorized }
  )
}
