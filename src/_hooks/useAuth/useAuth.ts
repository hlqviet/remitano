import { useEffect, useState } from 'react'

import { API_PATH } from '@/src/_lib/constants'

interface UseAuthProps {
  email: string
  password: string
}

const useAuth = (props: UseAuthProps) => {
  const { email, password } = props
  const [authenticated, setAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    ;(async () => {
      if (!email || !password) {
        setIsLoading(false)
        setError(undefined)
      }

      try {
        const response = await fetch(`${API_PATH}/auth`, {
          method: 'POST',
          body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
          setAuthenticated(false)
          setError(new Error(await response.text()))

          return
        }

        setAuthenticated(true)
        setError(undefined)
      } catch (err: any) {
        console.error(err)
        setAuthenticated(false)
        setError(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [email, password])

  return { error, isLoading, authenticated }
}

export default useAuth
