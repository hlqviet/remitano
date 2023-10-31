'use client'

import { ErrorMessage } from '@hookform/error-message'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import TextField from '@/src/_components/TextField'
import { Text } from '@/src/_components/Typography'
import { fetcher } from '@/src/_lib/helpers'
import { digest } from '@/src/_lib/utils'
import User from '@/src/_models/user'

interface UserAuthFormFieldValues {
  email: string
  password: string
}

interface UserAuthFormProps {
  setUser: (value: User | null) => void
}

const UserAuthForm = (props: UserAuthFormProps) => {
  const { setUser } = props
  const [error, setError] = useState('')
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit
  } = useForm<UserAuthFormFieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<UserAuthFormFieldValues> = async (data) => {
    const { email, password } = data

    try {
      const data = await fetcher('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password: await digest(password) })
      })

      setUser(data)
      setError('')
      window?.location.reload()
    } catch (err: any) {
      console.error(err)
      setError(err.info.message)
    }
  }

  return (
    <form
      className='max-w-screen-md grid grid-cols-2 lg:grid-cols-3 col-span-2 gap-2 justify-end'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box>
        <TextField
          placeholder='Email'
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'This must be an email.'
            }
          })}
        />
        <Text className='text-red-600'>
          <ErrorMessage errors={errors} name='email' />
        </Text>
      </Box>
      <Box>
        <TextField
          placeholder='Password'
          type='password'
          {...register('password', { required: 'Password is required.' })}
        />
        <Text className='text-red-600'>
          <ErrorMessage errors={errors} name='password' />
        </Text>
      </Box>
      <Box>
        <Button disabled={isSubmitting} htmlType='submit' type='primary'>
          Log in/Register
        </Button>
        {error && <Text className='text-red-600'>{error}</Text>}
      </Box>
    </form>
  )
}

export default UserAuthForm
