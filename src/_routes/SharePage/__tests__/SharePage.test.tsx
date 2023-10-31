import { render, screen } from '@testing-library/react'

import useAuth from '@/src/_hooks/useAuth'
import useLocalStorage from '@/src/_hooks/useLocalStorage'
import SharePage from '@/src/_routes/SharePage/SharePage'

jest
  .mock('next/navigation')
  .mock('@/src/_hooks/useAuth')
  .mock('@/src/_hooks/useLocalStorage')

describe(SharePage.name, () => {
  it('should render a spinner when the authentication is still in progress', () => {
    ;(useLocalStorage as jest.Mock).mockReturnValue([{}])
    ;(useAuth as jest.Mock).mockReturnValue({ isLoading: true })

    render(<SharePage />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('should render a message when the user is not authenticated', () => {
    ;(useLocalStorage as jest.Mock).mockReturnValue([{}])
    ;(useAuth as jest.Mock).mockReturnValue({})

    render(<SharePage />)

    expect(
      screen.getByText('You must be logged in to use this feature.')
    ).toBeInTheDocument()
  })

  it('should render the video sharing page when the user is authenticated', () => {
    ;(useLocalStorage as jest.Mock).mockReturnValue([{}])
    ;(useAuth as jest.Mock).mockReturnValue({ authenticated: true })

    render(<SharePage />)

    expect(screen.getByText('Share a YouTube movie')).toBeInTheDocument()
  })
})
