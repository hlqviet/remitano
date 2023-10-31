import videos from '@/src/_data/videos'
import Video from '@/src/_models/video'

export async function GET() {
  return Response.json(videos)
}

export async function POST(req: Request) {
  const { video }: { video: Video } = await req.json()

  videos.push(video)

  return Response.json(video)
}
