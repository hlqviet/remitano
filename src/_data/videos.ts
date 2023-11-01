import Video from '@/src/_models/video'

declare global {
  var videos: Video[]
}

if (!global.videos) {
  global.videos = []
}

const videos = global.videos

export default videos
