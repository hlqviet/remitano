import users from '@/src/_data/users'

export async function GET(req: Request) {
  const { email } = await req.json()
  const user = users.find((user) => user.email === email)

  if (!user)
    return Response.json({ message: 'User not found.' }, { status: 404 })

  return Response.json({ id: user.id, email: user.email })
}
