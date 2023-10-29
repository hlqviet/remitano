import useSWR from 'swr'

import { API_PATH } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'

interface UseUserAuthenticationProps {
  id: number
}

const useUser = (props: UseUserAuthenticationProps) => {
  const { id } = props
  const { data, error, isLoading } = useSWR(`${API_PATH}/users/${id}`, fetcher)

  return { data, error, isLoading }
}

export default useUser
