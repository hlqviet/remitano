import { render, screen } from '@testing-library/react'

import Video from '@/src/_models/video'
import VideoContainer from '@/src/_routes/VideoPage/components/VideoContainer'

describe(VideoContainer.name, () => {
  it('should render correctly', () => {
    const video: Video = {
      id: 'id',
      title: 'Unit Test',
      description: 'This is a unit test.',
      userId: 1
    }

    render(
      <VideoContainer
        id={video.id}
        title={video.title}
        description={video.description}
        email='user@example.com'
      />
    )

    expect(screen.getByText('UNIT TEST')).toBeInTheDocument()
    expect(
      screen.getByText('user@example.com', { exact: false })
    ).toBeInTheDocument()
    expect(
      screen.getByText('This is a unit test.', { exact: false })
    ).toBeInTheDocument()
  })
})
