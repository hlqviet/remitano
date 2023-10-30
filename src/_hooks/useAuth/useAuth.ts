import { useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'

import { API_PATH } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'

interface UseAuthProps {
  email: string
  password: string
}

const useAuth = (props: UseAuthProps) => {
  const { email, password } = props
  const [authenticated, setAuthenticated] = useState(false)
  const {
    error,
    isMutating: isLoading,
    trigger
  } = useSWRMutation(`${API_PATH}/auth`, (url) =>
    fetcher(url, { method: 'POST', body: JSON.stringify({ email, password }) })
  )

  useEffect(() => {
    if (!email || !password) return
    ;(async () => {
      try {
        await trigger()
        setAuthenticated(true)
      } catch (err: any) {
        console.error(err)
        setAuthenticated(false)
      }
    })()
  }, [email, password, trigger])

  return { error, isLoading, authenticated }
}

export default useAuth
