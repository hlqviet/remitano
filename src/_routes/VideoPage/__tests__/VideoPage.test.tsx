import { render, screen } from '@testing-library/react'

import useUsers from '@/src/_hooks/useUsers'
import useVideos from '@/src/_hooks/useVideos'
import VideoPage from '@/src/_routes/VideoPage/VideoPage'

jest.mock('@/src/_hooks/useUsers').mock('@/src/_hooks/useVideos')

describe(VideoPage.name, () => {
  it('should render a spinner when users or videos are still being fetched', () => {
    ;(useUsers as jest.Mock).mockReturnValue({ isLoading: true })
    ;(useVideos as jest.Mock).mockReturnValue({ isLoading: true })

    render(<VideoPage />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('should render the error message when an error occurs', () => {
    ;(useUsers as jest.Mock).mockReturnValue({ error: new Error('test error') })
    ;(useVideos as jest.Mock).mockReturnValue({})

    render(<VideoPage />)

    expect(
      screen.getByText('An error occured while fetching videos.')
    ).toBeInTheDocument()
  })

  it('should render a message when there is no video', () => {
    ;(useUsers as jest.Mock).mockReturnValue({})
    ;(useVideos as jest.Mock).mockReturnValue({})

    render(<VideoPage />)

    expect(screen.getByText('No videos shared.')).toBeInTheDocument()
  })

  it('should render videos when they are fetched', () => {
    ;(useUsers as jest.Mock).mockReturnValue({
      data: [{ id: 1, email: 'user@example.com' }]
    })
    ;(useVideos as jest.Mock).mockReturnValue({
      data: [
        { id: 'id', title: 'Unit Test', description: 'This is a unit test' }
      ]
    })

    render(<VideoPage />)

    expect(screen.getByText('UNIT TEST')).toBeInTheDocument()
  })
})
