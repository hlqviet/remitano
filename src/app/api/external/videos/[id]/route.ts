import { RAPIDAPI_API_HOST, RAPIDAPI_API_KEY } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const searchParams = new URLSearchParams()

  searchParams.set('id', id)

  const data = await fetcher(
    `${RAPIDAPI_API_HOST}/dl?${searchParams.toString()}`,
    {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_API_KEY!,
        'X-RapidAPI-Host': RAPIDAPI_API_HOST!.replace('https://', '')
      }
    }
  )

  return Response.json(data)
}
