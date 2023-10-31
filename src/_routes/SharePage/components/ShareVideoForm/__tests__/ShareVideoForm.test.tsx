import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/navigation'

import useLocalStorage from '@/src/_hooks/useLocalStorage'
import { API_PATH } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'
import ShareVideoForm from '@/src/_routes/SharePage/components/ShareVideoForm/ShareVideoForm'

jest
  .mock('next/navigation')
  .mock('@/src/_lib/helpers')
  .mock('@/src/_hooks/useLocalStorage')

describe(ShareVideoForm.name, () => {
  const youtubeUrl = 'https://youtu.be/PrEa7oU1jZs?si=jXeoZUbw0XhFF8iR'
  const consoleError = console.error

  beforeEach(() => {
    console.error = jest.fn()
  })

  afterAll(() => {
    console.error = consoleError
  })

  it('should submit successfully when the data is valid', async () => {
    ;(useRouter as jest.Mock).mockReturnValue({ push: jest.fn() })
    ;(useLocalStorage as jest.Mock).mockReturnValue([{ id: 1 }])
    ;(fetcher as jest.Mock).mockImplementation((url) => {
      switch (url) {
        case `${API_PATH}/external/videos/PrEa7oU1jZs`:
          return Promise.resolve({
            id: 'PrEa7oU1jZs',
            title: 'Unit Test',
            description: 'Unit test',
            userId: 1
          })
        case `${API_PATH}/videos`:
          return Promise.resolve({})
      }
    })

    const user = userEvent.setup()

    render(<ShareVideoForm />)

    await user.type(
      screen.getByRole('textbox', { name: 'YouTube URL:' }),
      youtubeUrl
    )
    await user.click(screen.getByRole('button', { name: 'Share' }))

    expect(fetcher).toHaveBeenCalledWith(
      `${API_PATH}/external/videos/PrEa7oU1jZs`
    )
    expect(fetcher).toHaveBeenCalledWith(`${API_PATH}/videos`, {
      method: 'POST',
      body: JSON.stringify({
        video: {
          id: 'PrEa7oU1jZs',
          title: 'Unit Test',
          description: 'Unit test',
          userId: 1
        }
      })
    })
  })

  it('should handle error when the data is valid and the request fails', async () => {
    ;(useLocalStorage as jest.Mock).mockReturnValue([{ id: 1 }])
    ;(fetcher as jest.Mock).mockRejectedValue(new Error('test error'))

    const user = userEvent.setup()

    render(<ShareVideoForm />)

    await user.type(
      screen.getByRole('textbox', { name: 'YouTube URL:' }),
      youtubeUrl
    )
    await user.click(screen.getByRole('button', { name: 'Share' }))

    expect(console.error).toHaveBeenCalled()
  })

  it('should handle form error correctly', async () => {
    const user = userEvent.setup()

    render(<ShareVideoForm />)

    await user.click(screen.getByRole('button', { name: 'Share' }))
    expect(screen.getByText('This is required.')).toBeInTheDocument()

    await user.type(
      screen.getByRole('textbox', { name: 'YouTube URL:' }),
      'Unit test'
    )
    expect(screen.getByText('This must be a YouTube URL.')).toBeInTheDocument()
  })
})
