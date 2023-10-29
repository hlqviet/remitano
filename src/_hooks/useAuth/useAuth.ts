import useSWRMutation from 'swr/mutation'

import { API_PATH } from '@/src/_lib/constants'

interface UseAuthProps {
  email: string
  password: string
}

const useAuth = (props: UseAuthProps) => {
  const { error, isMutating, trigger } = useSWRMutation(
    `${API_PATH}/auth`,
    async (url) => fetch(url, { method: 'POST', body: JSON.stringify(props) })
  )

  return { error, isMutating, trigger }
}

export default useAuth
