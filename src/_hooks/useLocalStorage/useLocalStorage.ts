import { useState } from 'react'

const useLocalStorage = <T extends any>(
  key: string
): [T | null, (value: T | null) => void] => {
  const [state, setState] = useState<T | null>(() => {
    if (typeof window === 'undefined') return

    try {
      const value = window.localStorage.getItem(key)

      return value ? JSON.parse(value) : null
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value: T | null) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setState(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [state, setValue]
}

export default useLocalStorage
