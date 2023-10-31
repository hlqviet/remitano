'use client'

import Box from '@/src/_components/Box'
import Spinner from '@/src/_components/Spinner'
import { Text } from '@/src/_components/Typography'
import useUsers from '@/src/_hooks/useUsers'
import useVideos from '@/src/_hooks/useVideos'
import VideoContainer from '@/src/_routes/VideoPage/components/VideoContainer'

const VideoPage = () => {
  const {
    data: users = [],
    error: usersError,
    isLoading: usersLoading
  } = useUsers()
  const {
    data: videos = [],
    error: videosError,
    isLoading: videosLoading
  } = useVideos()

  if (usersLoading || videosLoading)
    return (
      <Box className='flex justify-center'>
        <Spinner />
      </Box>
    )

  if (usersError || videosError)
    return <Box>An error occured while fetching videos.</Box>

  const userEmailsById = users.reduce<Record<number, string>>(
    (previous, current) => ({ ...previous, [current.id]: current.email }),
    {}
  )

  return (
    <Box className='flex justify-center'>
      <Box className='max-w-screen-2xl flex flex-wrap gap-4 justify-center'>
        {videos.length === 0 && <Text>No videos shared.</Text>}

        {videos.length > 0 &&
          videos.map(({ id, title, description, userId }) => (
            <VideoContainer
              key={id}
              id={id}
              title={title}
              description={description}
              email={userEmailsById[userId]}
            />
          ))}
      </Box>
    </Box>
  )
}

export default VideoPage
