import Box from '@/src/_components/Box'
import { Heading } from '@/src/_components/Typography'
import User from '@/src/_models/user'
import Video from '@/src/_models/video'

interface VideoContainerProps extends Omit<Video, 'userId'> {
  email: User['email']
}

const VideoContainer = (props: VideoContainerProps) => {
  const { id, title, description, email } = props

  return (
    <Box key={id} className='flex flex-wrap flex-col xl:flex-row'>
      <Box
        className='xl:basis-1/3 2xl:basis-2/5'
        dangerouslySetInnerHTML={{
          __html: `<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }}
      />
      <Box className='xl:pl-4 xl:basis-2/3 2xl:basis-3/5'>
        <Heading className='text-red-600' level={5}>
          {title.toUpperCase()}
        </Heading>
        <Box>Shared by {email}</Box>
        <Box>Description:</Box>
        <Box>{description.substring(0, 500)}...</Box>
      </Box>
    </Box>
  )
}

export default VideoContainer
