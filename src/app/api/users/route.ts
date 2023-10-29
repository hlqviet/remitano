import users from '@/src/_data/users'

export async function GET() {
  return Response.json(users.map(({ id, email }) => ({ id, email })))
}

export async function POST(req: Request) {
  const { email, password } = await req.json()
  const user = users.find((user) => user.email === email)

  if (!user) {
    const lastUser = users[users.length - 1]

    users.push({ id: lastUser ? lastUser.id + 1 : 1, email, password })

    return new Response(undefined, { status: 200 })
  }

  if (user.password === password)
    return new Response(undefined, { status: 200 })

  return new Response('Email or password is incorrect.', { status: 401 })
}
