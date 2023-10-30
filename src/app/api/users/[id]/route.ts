import users from '@/src/_data/users'

export async function GET(req: Request) {
  const { email } = await req.json()
  const user = users.find((user) => user.email === email)

  if (!user) return new Response(undefined, { status: 404 })

  return Response.json({ id: user.id, email: user.email })
}
