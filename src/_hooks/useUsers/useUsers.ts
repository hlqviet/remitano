import useSWR from 'swr'

import { API_PATH } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'
import User from '@/src/_models/user'

const useUsers = () => {
  const { data, error, isLoading } = useSWR<User[]>(
    `${API_PATH}/users`,
    fetcher
  )

  return { data, error, isLoading }
}

export default useUsers
