import RequestError from '@/src/_models/request-error'

export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args)

  if (!res.ok) {
    const error = new RequestError('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return await res.json()
}
