import users from '@/src/_data/users'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password)
    return Response.json(
      { message: 'Email and password are required.' },
      { status: 400 }
    )

  const user = users.find((user) => user.email === email)

  if (!user || user.password !== password)
    return Response.json(
      { message: 'Email or password is incorrect.' },
      { status: 401 }
    )

  return Response.json({ success: true }, { status: 200 })
}
