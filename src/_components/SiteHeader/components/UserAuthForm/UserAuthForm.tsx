import { ErrorMessage } from '@hookform/error-message'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/src/_components/Button'
import TextField from '@/src/_components/TextField'
import { Text } from '@/src/_components/Typography'
import useLocalStorage from '@/src/_hooks/useLocalStorage'
import User from '@/src/_models/user'

interface UserAuthFormFieldValues {
  email: string
  password: string
}

const UserAuthForm = () => {
  const [error, setError] = useState('')
  const [, setUser] = useLocalStorage<User>('user')
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
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        return setError(await response.text())
      }

      const data = await response.json()

      setUser(data)
      setError('')

      if (typeof window !== 'undefined') {
        window.location.reload()
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message)
    }
  }

  return (
    <form
      className='grid grid-cols-2 lg:grid-cols-3 col-span-2 gap-2 justify-end'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
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
      </div>
      <div>
        <TextField
          placeholder='Password'
          type='password'
          {...register('password', { required: 'Password is required.' })}
        />
        <Text className='text-red-600'>
          <ErrorMessage errors={errors} name='password' />
        </Text>
      </div>
      <div>
        <Button disabled={isSubmitting} htmlType='submit' type='primary'>
          Log in/Register
        </Button>
        {error && <Text className='text-red-600'>{error}</Text>}
      </div>
    </form>
  )
}

export default UserAuthForm
