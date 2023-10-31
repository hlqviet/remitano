import users from '@/src/_data/users'
import { HttpStatus } from '@/src/_lib/enums'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password)
    return Response.json(
      { message: 'Email and password are required.' },
      { status: HttpStatus.BadRequest }
    )

  const user = users.find((user) => user.email === email)

  if (!user || user.password !== password)
    return Response.json(
      { message: 'Email or password is incorrect.' },
      { status: HttpStatus.Unauthorized }
    )

  return Response.json({ success: true })
}
