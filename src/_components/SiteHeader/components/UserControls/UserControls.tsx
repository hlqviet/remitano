'use client'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import UserAuthForm from '@/src/_components/SiteHeader/components/UserAuthForm'
import { Text } from '@/src/_components/Typography'
import useAuth from '@/src/_hooks/useAuth'
import useLocalStorage from '@/src/_hooks/useLocalStorage'
import User from '@/src/_models/user'

const UserControls = () => {
  const [user, setUser] = useLocalStorage<User>('user')
  const { email, password } = user ?? { email: '', password: '' }
  const { error, isLoading, authenticated } = useAuth({ email, password })

  const handleLogoutClick = () => {
    setUser(null)
  }

  if (isLoading) return null

  if (!error && user && authenticated) {
    return (
      <Box className='grid grid-cols-2 lg:grid-cols-3 col-span-2 gap-2 justify-end'>
        <Text>Welcome {email}</Text>
        <Button type='primary'>Share a movie</Button>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Box>
    )
  }

  return <UserAuthForm setUser={setUser} />
}

export default UserControls
