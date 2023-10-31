'use client'

import Box from '@/src/_components/Box'
import Spinner from '@/src/_components/Spinner'
import { Text } from '@/src/_components/Typography'
import useAuth from '@/src/_hooks/useAuth'
import useLocalStorage from '@/src/_hooks/useLocalStorage'
import User from '@/src/_models/user'
import ShareVideoForm from '@/src/_routes/SharePage/components/ShareVideoForm'

const SharePage = () => {
  const [user] = useLocalStorage<User>('user')
  const { email, password } = user ?? { email: '', password: '' }
  const {
    error: authError,
    isLoading: isLoadingAuth,
    authenticated
  } = useAuth({ email, password })

  if (isLoadingAuth)
    return (
      <Box className='flex justify-center'>
        <Spinner />
      </Box>
    )

  if (authError || !authenticated)
    return <Box>You must be logged in to use this feature.</Box>

  return (
    <Box className='h-full flex flex-col justify-center items-center'>
      <Box className='w-full max-w-screen-md p-4 md:p-8 border rounded-lg'>
        <Box className='mb-6'>
          <Text className='text-xl md:text-3xl lg:text-5xl'>
            Share a YouTube movie
          </Text>
        </Box>
        <ShareVideoForm />
      </Box>
    </Box>
  )
}

export default SharePage
