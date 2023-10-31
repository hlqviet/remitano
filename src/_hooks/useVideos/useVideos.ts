import useSWR from 'swr'

import { API_PATH } from '@/src/_lib/constants'
import { fetcher } from '@/src/_lib/helpers'
import Video from '@/src/_models/video'

const useVideos = () => {
  const { data, error, isLoading } = useSWR<Video[]>(
    `${API_PATH}/videos`,
    fetcher
  )

  return { data, error, isLoading }
}

export default useVideos
