'use client'

import { ErrorMessage } from '@hookform/error-message'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import Label from '@/src/_components/Label'
import TextField from '@/src/_components/TextField'
import { Text } from '@/src/_components/Typography'
import useLocalStorage from '@/src/_hooks/useLocalStorage'
import { API_PATH } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'
import User from '@/src/_models/user'
import Video from '@/src/_models/video'

const youtubeUrlPattern =
  /^(?:https:\/\/)(?:(?:www\.)?youtube\.com\/watch\?v=|youtu\.be\/)(?<id>[\w-]+)/

interface ShareVideoFormValues {
  url: string
}

const ShareVideoForm = () => {
  const [user] = useLocalStorage<User>('user')
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit
  } = useForm<ShareVideoFormValues>({
    defaultValues: {
      url: ''
    }
  })
  const router = useRouter()

  const onSubmit: SubmitHandler<ShareVideoFormValues> = async (data) => {
    const { url } = data
    const id = youtubeUrlPattern.exec(url)!.groups!.id

    try {
      const videoData = await fetcher(`${API_PATH}/external/videos/${id}`)
      const video: Video = {
        id,
        title: videoData.title,
        description: videoData.description,
        userId: user!.id
      }

      await fetcher(`${API_PATH}/videos`, {
        method: 'POST',
        body: JSON.stringify({ video })
      })

      router.push('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className='flex flex-wrap gap-y-4'>
        <Box className='basis-full md:basis-1/3'>
          <Label htmlFor='url'>YouTube URL:</Label>
        </Box>
        <Box className='basis-full md:basis-2/3'>
          <TextField
            id='url'
            placeholder='YouTube URL'
            {...register('url', {
              required: 'This is required.',
              pattern: {
                value: youtubeUrlPattern,
                message: 'This must be a YouTube URL.'
              }
            })}
          />
          <Text className='text-red-600'>
            <ErrorMessage errors={errors} name='url' />
          </Text>
        </Box>
        <Box className='md:basis-1/3' />
        <Box className='md:basis-2/3'>
          <Button type='primary' disabled={isSubmitting}>
            Share
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default ShareVideoForm
