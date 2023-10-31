import { renderHook, waitFor } from '@testing-library/react'

import useAuth from '@/src/_hooks/useAuth/useAuth'
import { fetcher } from '@/src/_lib/helpers'

jest.mock('@/src/_lib/helpers')

describe(useAuth.name, () => {
  const consoleError = console.error

  beforeEach(() => {
    console.error = jest.fn()
  })

  afterAll(() => {
    console.error = consoleError
  })

  it('should do nothing when there is no email or password', () => {
    const { rerender } = renderHook(() =>
      useAuth({ email: 'email@example.com', password: '' })
    )

    rerender({ email: '', password: '' })

    expect(fetcher).not.toHaveBeenCalled()
  })

  it('should return correct results when authentication is successful', async () => {
    ;(fetcher as jest.Mock).mockResolvedValue({})

    const { result, rerender } = renderHook(() =>
      useAuth({ email: 'email@example.com', password: '1' })
    )

    await waitFor(() => {
      expect(result.current).toMatchObject({
        isLoading: false,
        authenticated: true
      })
    })
  })

  it('should return correct results when authentication fails', async () => {
    ;(fetcher as jest.Mock).mockRejectedValue({})

    const { result } = renderHook(() =>
      useAuth({ email: 'email@example.com', password: '1' })
    )

    await waitFor(() => {
      expect(result.current).toMatchObject({
        isLoading: false,
        authenticated: false
      })
      expect(console.error).toHaveBeenCalled()
    })
  })
})
