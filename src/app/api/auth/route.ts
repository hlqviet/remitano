import users from '@/src/_data/users'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) return new Response(undefined, { status: 401 })

  const user = users.find((user) => user.email === email)

  if (!user || user.password !== password)
    return new Response(undefined, { status: 401 })

  return new Response(undefined, { status: 200 })
}
