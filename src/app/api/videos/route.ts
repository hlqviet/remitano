import videos from '@/src/_data/videos'

export async function GET() {
  return Response.json(videos)
}
